import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { isSameOriginRequest } from "@/lib/request-guard";
import { escapeHtml } from "@/lib/sanitize";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    if (!isSameOriginRequest(request)) {
      return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
    }

    const ip = getClientIp(request);
    const limit = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many messages sent. Please try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
    const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    // Silently accept honeypot submissions so bots cannot learn how they were blocked.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (
      firstName.length > 80 ||
      lastName.length > 80 ||
      email.length > 254 ||
      phone.length > 30 ||
      message.length > 5000 ||
      !EMAIL_PATTERN.test(email)
    ) {
      return NextResponse.json(
        { error: "Please check the information you entered." },
        { status: 400 },
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_EMAIL, SMTP_PASS, SMTP_FROM, CEO_EMAIL } =
      process.env;

    if (!SMTP_HOST || !SMTP_EMAIL || !SMTP_PASS) {
      console.error("Contact email is not configured: missing SMTP settings.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable. Please call us instead." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === "true",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASS,
      },
    });

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_EMAIL,
      to: CEO_EMAIL || "ceo@weecarecanada.com",
      replyTo: email,
      subject: `New website contact from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}\n\nMessage:\n${message}`,
      html: `
        <h2>New website contact</h2>
        <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}

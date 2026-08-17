import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
const bookingid = 
Date.now()
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: process.env.SMTP_EMAIL
    ? {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      }
    : undefined,
});

interface BookingRequest {
  // Service details
  service: string;
  date: string;
  time: string;
  price: string;
  staffMember?: string;

  // Client details
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  // Service address
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;

  // Additional info
  message?: string;
}

const sendEmail = async (to: string, subject: string, html: string) => {
  const mailOptions = {
    from: process.env.SMTP_FROM || `noreply@weecarecanada.com`,
    to,
    subject,
    html,
  };

  await transporter.verify();
  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent successfully:", info?.response ?? info);
  return info;
};

const generateClientEmailTemplate = (booking: BookingRequest) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #76cba4; color: white; padding: 20px; text-align: center; border-radius: 4px 4px 0 0; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 300; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; border-top: none; }
        .section { margin-bottom: 20px; }
        .section-title { font-weight: bold; color: #554971; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e0e0e0; }
        .detail-label { font-weight: bold; color: #666; }
        .detail-value { color: #333; }
        .footer { background: #f5f5f5; padding: 15px; border: 1px solid #e0e0e0; border-top: none; text-align: center; font-size: 12px; color: #999; border-radius: 0 0 4px 4px; }
        .cta-button { background: #89599c; color: white; padding: 12px 24px; text-decoration: none; display: inline-block; border-radius: 4px; margin-top: 15px; }
        .highlight { color: #0fa960; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✓ Booking Confirmed</h1>
        </div>
        <div class="content">
          <p>Hi ${booking.firstName},</p>
          <p>Thank you! We've received your booking and we're excited to serve you. Here are your booking details:</p>

          <div class="section">
            <div class="section-title">Service Details</div>
            <div class="detail-row">
              <span class="detail-label">Service:</span>
              <span class="detail-value">${booking.service}</span>
            </div>
             <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span class="detail-value">#${Date.now()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">${booking.date}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${booking.time}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Duration:</span>
              <span class="detail-value">1 hour</span>
            </div>
            ${booking.staffMember && booking.staffMember !== "Any staff member" ? `
            <div class="detail-row">
              <span class="detail-label">Preferred Staff:</span>
              <span class="detail-value">${booking.staffMember}</span>
            </div>
            ` : ""}
            <div class="detail-row">
              <span class="detail-label">Price:</span>
              <span class="detail-value ${booking.price === "Free" ? 'highlight' : ''}">${booking.price}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Service Location</div>
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span class="detail-value">${booking.streetAddress}, ${booking.city}, ${booking.province} ${booking.postalCode}</span>
            </div>
          </div>

          ${booking.message ? `
          <div class="section">
            <div class="section-title">Your Message</div>
            <p style="margin: 0; color: #555;">${booking.message}</p>
          </div>
          ` : ""}

          <div class="section">
            <div class="section-title">What's Next?</div>
            <p>Our team will reach out to you shortly to confirm your appointment. If you need to reschedule or have any questions, please don't hesitate to contact us.</p>
            <ul>
              <li>✓ Free cancellation up to 24 hours before your appointment</li>
              <li>✓ We'll call you at ${booking.phoneNumber} to confirm</li>
              <li>✓ No payment required (visit us to pay in-person)</li>
            </ul>
          </p>

          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            If you have any questions, reply to this email or visit our website.
          </p>
        </div>
        <div class="footer">
          <p>Wee Care Canada | Professional Home Support Services</p>
          <p>© 2026 All rights reserved</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const generateCEOEmailTemplate = (booking: BookingRequest) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 700px; margin: 0 auto; padding: 20px; }
        .header { background: #554971; color: white; padding: 20px; text-align: center; border-radius: 4px 4px 0 0; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 300; }
        .header p { margin: 5px 0 0 0; font-size: 14px; opacity: 0.9; }
        .content { background: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; border-top: none; }
        .section { margin-bottom: 25px; }
        .section-title { font-weight: bold; color: #554971; margin-bottom: 10px; font-size: 13px; text-transform: uppercase; border-bottom: 2px solid #76cba4; padding-bottom: 8px; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; }
        .detail-label { font-weight: bold; color: #666; }
        .detail-value { color: #333; }
        .footer { background: #f5f5f5; padding: 15px; border: 1px solid #e0e0e0; border-top: none; text-align: center; font-size: 12px; color: #999; border-radius: 0 0 4px 4px; }
        .status-badge { display: inline-block; background: #76cba4; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📋 New Booking Received</h1>
          <p><span class="status-badge">Pending Confirmation</span></p>
        </div>
        <div class="content">
          <p>A new booking has been submitted. Here are the complete details:</p>

          <div class="section">
            <div class="section-title">📌 Booking Summary</div>
            <div class="detail-row">
              <span class="detail-label">Booking ID:</span>
              <span class="detail-value">#${Date.now()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Service:</span>
              <span class="detail-value"><strong>${booking.service}</strong></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date & Time:</span>
              <span class="detail-value"><strong>${booking.date} at ${booking.time}</strong></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Price:</span>
              <span class="detail-value"><strong>${booking.price}</strong></span>
            </div>
            ${booking.staffMember && booking.staffMember !== "Any staff member" ? `
            <div class="detail-row">
              <span class="detail-label">Preferred Staff:</span>
              <span class="detail-value">${booking.staffMember}</span>
            </div>
            ` : ""}
          </div>

          <div class="section">
            <div class="section-title">👤 Client Information</div>
            <div class="detail-row">
              <span class="detail-label">Name:</span>
              <span class="detail-value">${booking.firstName} ${booking.lastName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value"><a href="mailto:${booking.email}">${booking.email}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${booking.phoneNumber}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">📍 Service Location</div>
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span class="detail-value">${booking.streetAddress}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">City/Province:</span>
              <span class="detail-value">${booking.city}, ${booking.province} ${booking.postalCode}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Country:</span>
              <span class="detail-value">${booking.country}</span>
            </div>
          </div>

          ${booking.message ? `
          <div class="section">
            <div class="section-title">💬 Client Message</div>
            <p style="margin: 0; color: #555; background: white; padding: 12px; border-left: 3px solid #76cba4; border-radius: 2px;">${booking.message}</p>
          </div>
          ` : ""}

          <div class="section">
            <div class="section-title">⚠️ Action Required</div>
            <p>Please review this booking and contact the client at <strong>${booking.phoneNumber}</strong> or <strong>${booking.email}</strong> to confirm the appointment.</p>
          </div>
        </div>
        <div class="footer">
          <p>Wee Care Canada - Booking Management System</p>
          <p>This is an automated notification. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as BookingRequest;

    // Validation
    const requiredFields = [
      "service",
      "date",
      "time",
      "price",
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "country",
      "streetAddress",
      "city",
      "province",
      "postalCode",
    ];

    const missingFields = requiredFields.filter((field) => !body[field as keyof BookingRequest]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Send email to client
    console.log(`Sending confirmation email to client: ${body.email}`);
    try {
      await sendEmail(
        body.email,
        `✓ Booking Confirmed - ${body.service}`,
        generateClientEmailTemplate(body)
      );
      console.log(`Client email sent successfully to ${body.email}`);
    } catch (clientEmailError) {
      console.error("Failed to send client email:", clientEmailError);
      return NextResponse.json(
        { error: "Failed to send confirmation email to client" },
        { status: 502 }
      );
    }

    // Send email to CEO
    const ceoEmail = process.env.CEO_EMAIL || "ceo@weecarecanada.com";
    console.log(`Sending booking notification to CEO: ${ceoEmail}`);
    try {
      await sendEmail(
        ceoEmail,
        `📋 New Booking: ${body.service} - ${body.firstName} ${body.lastName}`,
        generateCEOEmailTemplate(body)
      );
      console.log(`CEO email sent successfully to ${ceoEmail}`);
    } catch (ceoEmailError) {
      console.error("Failed to send CEO email:", ceoEmailError);
      // Don't fail the request if CEO email fails - client confirmation is most important
      console.warn("Proceeding despite CEO email failure");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Booking submitted successfully. Confirmation email sent.",
        bookingId: `#${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Error in /api/bookings/submit:", err);
    return NextResponse.json({ error: "Failed to process booking" }, { status: 500 });
  }
}

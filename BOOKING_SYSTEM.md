# Wee Care Canada - Booking System Documentation

## Overview

The booking system follows a professional 3-step pipeline:
1. **Service Selection** - User chooses a service (Home Visit, Initial Consultation, etc.)
2. **Booking Calendar** - User selects date, time, and preferred staff member
3. **Client Details** - User enters personal and address information
4. **Email Pipeline** - Automated emails sent to both client and CEO

## API Endpoints

### POST `/api/bookings/submit`

Handles complete booking submission and triggers email notifications.

**Request Body:**
```json
{
  "service": "Home Visit",
  "date": "August 20, 2026",
  "time": "10:00 a.m.",
  "price": "$50",
  "staffMember": "Afnan Aleem",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phoneNumber": "+1 (647) 555-0000",
  "country": "Canada",
  "streetAddress": "123 Main Street",
  "city": "Kitchener",
  "province": "Ontario",
  "postalCode": "N2E 4G2",
  "message": "Optional special requests or notes"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Booking submitted successfully. Confirmation email sent.",
  "bookingId": "#1692576000000"
}
```

**Response (Error):**
```json
{
  "error": "Missing required fields: email, firstName"
}
```

## Email Pipeline

### 1. Client Confirmation Email
- **Recipient:** Client email address
- **Trigger:** Automatic on booking submission
- **Content:**
  - Booking details (service, date, time, location)
  - Confirmation message
  - Next steps (team will contact to confirm)
  - Cancellation policy (24 hours free cancellation)
  - Contact information

### 2. CEO Notification Email
- **Recipient:** CEO at Wee Care Canada (configurable via `CEO_EMAIL` env var, default: `ceo@weecarecanada.com`)
- **Trigger:** Automatic on booking submission
- **Content:**
  - Complete booking summary with unique ID
  - Client contact information
  - Service location details
  - Client's special requests/message
  - Action required notice (confirm appointment)

## Setup Instructions

### 1. Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

**Required Variables:**

#### Gmail Setup (Recommended for Testing)
1. Enable 2-Step Verification on your Google Account
2. Generate an [App Password](https://support.google.com/accounts/answer/185833)
3. Set environment variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_EMAIL=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@weecarecanada.com
```

#### Alternative Email Providers

**SendGrid:**
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_EMAIL=apikey
SMTP_PASS=your-sendgrid-api-key
```

**AWS SES:**
```
SMTP_HOST=email-smtp.region.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_EMAIL=your-ses-email@domain.com
SMTP_PASS=your-ses-password
```

#### CEO Email
```
CEO_EMAIL=ceo@weecarecanada.com
```

### 2. Dependencies

Install required packages:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 3. Database (Optional - for production)

Consider adding database logging for bookings:
- Prisma + PostgreSQL
- MongoDB
- Firebase

### 4. Testing

Test the booking flow:
1. Navigate to `/booking` → select a service
2. Choose date/time and staff member in `/booking-calendar/home-visit`
3. Fill in personal details in `/booking-form`
4. Submit booking

Check email for confirmation and verify CEO notification was sent.

## File Structure

```
app/
├── api/
│   ├── bookings/
│   │   └── submit/
│   │       └── route.ts          # Booking submission API
│   └── contact/
│       └── route.ts              # Contact form API
├── booking-calendar/
│   ├── home-visit/
│   │   └── page.tsx              # Home visit booking calendar
│   └── initial-consultation/
│       └── page.tsx              # Consultation booking calendar
├── booking-form/
│   └── page.tsx                  # Booking details form
└── booking/
    └── page.tsx                  # Service selection
```

## Features

✅ **Professional Email Templates** - HTML formatted emails for both client and CEO
✅ **Error Handling** - Validation and graceful error messages
✅ **Loading States** - User feedback during submission
✅ **Responsive Design** - Works on mobile and desktop
✅ **Staff Selection** - Client can request specific staff member
✅ **Booking ID** - Unique ID generated for each booking
✅ **Multi-step Form** - Guides users through the booking process
✅ **Email Verification** - SMTP connection verification before sending
✅ **HTML-escaped input** - All user-supplied fields are escaped before being interpolated into email HTML, preventing markup/script injection
✅ **Honeypot field** - Hidden `website` field silently absorbs bot submissions
✅ **Rate limiting** - Per-IP limit (5 requests / 10 minutes) on `/api/bookings/submit` and `/api/contact`
✅ **Same-origin check** - Requests must carry a matching Origin/Referer header, rejecting cross-site form submissions

## Troubleshooting

### Emails Not Sending

1. **Check SMTP credentials:**
   ```bash
   # Verify env vars are set
   echo $SMTP_EMAIL
   echo $SMTP_HOST
   ```

2. **Enable "Less secure app access"** (if using Gmail):
   - Go to https://myaccount.google.com/security
   - Look for "Less secure app access"

3. **Check firewall/network:**
   - Ensure SMTP port (usually 587) is not blocked
   - Test from command line: `telnet smtp.gmail.com 587`

4. **Check logs:**
   - Browser console (F12)
   - Next.js terminal
   - Email provider dashboard

### Form Validation Issues

- Ensure all required fields are filled
- Email must be valid format
- Phone number should include country code
- Postal code should match country

## Future Enhancements

## Company Info

**Wee Care Canada**
- Professional home support and care services
- Email: ceo@weecarecanada.com
- Website: weecarecanada.com
- Services: Home visits, consultations, grocery, transportation, social activities, and more

## Change Log

- [ ] Database integration for booking history
- [ ] SMS notifications
- [ ] Calendar sync (Google Calendar, Outlook)
- [ ] Automated reminders (24 hours before)
- [ ] Payment processing (Stripe, PayPal)
- [ ] Admin dashboard for booking management
- [ ] Client cancellation/rescheduling
- [ ] Staff availability management

## Support

For questions or issues with the booking system, contact the development team.

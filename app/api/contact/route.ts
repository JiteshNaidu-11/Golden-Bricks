import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, inquiryType } = body;

    // Validate required fields
    if (!name || !email || !message || !inquiryType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    const emailUser = process.env.EMAIL_USER || 'your-email@gmail.com';
    const emailPassword = process.env.EMAIL_APP_PASSWORD || 'your-app-password';
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'Inquiry@truestar.ae';

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: recipientEmail,
      subject: `New Contact Form Inquiry - ${inquiryType} | TrueStar Real Estate`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
              }
              .header {
                background: linear-gradient(135deg, #C5A24A 0%, #EBD181 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                padding: 20px;
                background: #f9f9f9;
              }
              .field {
                margin-bottom: 15px;
                padding: 10px;
                background: white;
                border-left: 3px solid #C5A24A;
              }
              .label {
                font-weight: bold;
                color: #C5A24A;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Inquiry</h2>
                <p>TrueStar Real Estate</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">Inquiry Type:</span>
                  <span class="value">${inquiryType}</span>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value" style="margin-top: 5px; white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the TrueStar Real Estate contact form.</p>
                <p>Reply directly to: ${email}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}


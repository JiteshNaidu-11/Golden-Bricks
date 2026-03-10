# Static Build Setup for Hostinger

This project has been configured for static export to deploy on Hostinger or any static hosting service.

## Changes Made

1. **Next.js Configuration**: Configured for static export (`output: 'export'`)
2. **Contact Form**: Migrated from server-side API route to EmailJS (client-side email service)
3. **Images**: Configured for unoptimized images (required for static export)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS

The contact form now uses EmailJS instead of a server-side API. Follow these steps:

1. **Sign up for EmailJS** (free account available):
   - Go to https://www.emailjs.com/
   - Create an account

2. **Create an Email Service**:
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy the Service ID

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Sender's phone (optional)
     - `{{inquiry_type}}` - Type of inquiry
     - `{{message}}` - Message content
     - `{{to_email}}` - Recipient email
   - Copy the Template ID

4. **Get Your Public Key**:
   - Go to Account > API Keys
   - Copy your Public Key

5. **Set Environment Variables**:
   - Copy `.env.example` to `.env.local`
   - Fill in your EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     NEXT_PUBLIC_RECIPIENT_EMAIL=Inquiry@truestar.ae
     ```

### 3. Build for Production

```bash
npm run build
```

This will create a `out` folder with all static files ready for deployment.

### 4. Deploy to Hostinger

1. Upload the contents of the `out` folder to your Hostinger hosting directory (usually `public_html`)
2. Ensure your domain is properly configured
3. The site should be live!

## EmailJS Template Example

Here's an example template you can use in EmailJS:

**Subject**: New Contact Form Inquiry - {{inquiry_type}} | TrueStar Real Estate

**Content** (HTML):
```html
<h2>New Contact Form Inquiry</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Inquiry Type:</strong> {{inquiry_type}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<p>---</p>
<p>This email was sent from the TrueStar Real Estate contact form.</p>
<p>Reply directly to: {{from_email}}</p>
```

## Notes

- The API route (`/app/api/contact/route.ts`) is no longer used but kept for reference
- All images are served unoptimized (required for static export)
- The build output is in the `out` directory
- Make sure to add `.env.local` to `.gitignore` (it should already be there)

## Troubleshooting

- **Contact form not working**: Check that all EmailJS environment variables are set correctly
- **Build errors**: Ensure all dependencies are installed (`npm install`)
- **Images not loading**: Check that image paths are correct and images exist in the `public` folder


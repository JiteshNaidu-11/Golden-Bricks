# EmailJS Setup Guide - Step by Step

This guide will walk you through getting your Service ID, Template ID, and Public Key from EmailJS.

## Step 1: Sign Up / Log In to EmailJS

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (or **"Log In"** if you already have an account)
3. You can sign up with Google, GitHub, or email
4. **Free plan** includes 200 emails/month - perfect for most websites

---

## Step 2: Get Your Public Key

1. After logging in, click on your **profile/account icon** (top right)
2. Go to **"Account"** → **"General"** tab
3. Scroll down to **"API Keys"** section
4. You'll see your **Public Key** (starts with something like `abc123xyz`)
5. **Copy this Public Key** - you'll need it for `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

**Note:** The Public Key is safe to use in client-side code (it's public by design)

---

## Step 3: Create an Email Service (Get Service ID)

1. In the EmailJS dashboard, click **"Email Services"** in the left sidebar
2. Click **"Add New Service"** button
3. Choose your email provider:
   - **Gmail** (recommended for beginners)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Follow the setup instructions for your chosen provider:

### If using Gmail:
   - Click **"Connect Account"**
   - Sign in with your Gmail account
   - Grant permissions
   - The service will be created automatically

5. After creating the service, you'll see it listed
6. Click on the service name to open it
7. You'll see the **Service ID** (e.g., `service_abc123`)
8. **Copy this Service ID** - you'll need it for `NEXT_PUBLIC_EMAILJS_SERVICE_ID`

---

## Step 4: Create an Email Template (Get Template ID)

1. In the EmailJS dashboard, click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"** button
3. Fill in the template details:

### Template Settings:
   - **Template Name**: `TrueStar Contact Form` (or any name you prefer)
   - **Subject**: `New Contact Form Inquiry - {{inquiry_type}} | TrueStar Real Estate`

### Template Content (HTML):
   Copy and paste this HTML code:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
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
      border: 1px solid #ddd;
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
      background: white;
      border: 1px solid #ddd;
      border-radius: 0 0 8px 8px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h2>New Contact Form Inquiry</h2>
    <p>TrueStar Real Estate</p>
  </div>
  <div class="content">
    <div class="field">
      <span class="label">Name:</span>
      <span class="value">{{from_name}}</span>
    </div>
    <div class="field">
      <span class="label">Email:</span>
      <span class="value">{{from_email}}</span>
    </div>
    <div class="field">
      <span class="label">Phone:</span>
      <span class="value">{{phone}}</span>
    </div>
    <div class="field">
      <span class="label">Inquiry Type:</span>
      <span class="value">{{inquiry_type}}</span>
    </div>
    <div class="field">
      <span class="label">Message:</span>
      <div class="value" style="margin-top: 5px; white-space: pre-wrap;">{{message}}</div>
    </div>
  </div>
  <div class="footer">
    <p>This email was sent from the TrueStar Real Estate contact form.</p>
    <p>Reply directly to: {{from_email}}</p>
  </div>
</body>
</html>
```

### Template Variables:
   Make sure these variables are available (they should be automatically detected):
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{inquiry_type}}` - Type of inquiry
   - `{{message}}` - Message content

4. **To Email**: ⚠️ **IMPORTANT** - Set this directly to `Inquiry@truestar.ae` (NOT a variable)
   - This is the email address where all contact form submissions will be sent
   - If you leave it as your Gmail address (rushimuthal8@gmail.com), emails will go there instead
   - Make sure to type: `Inquiry@truestar.ae` exactly
5. **From Name**: `TrueStar Contact Form` (or leave as `{{from_name}}`)
6. **From Email**: `{{from_email}}` (so replies go to the sender)
7. Click **"Save"** button

8. After saving, you'll see the template listed
9. Click on the template to open it
10. You'll see the **Template ID** (e.g., `template_xyz789`)
11. **Copy this Template ID** - you'll need it for `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

---

## Step 4b: Create Property Listing Email Template (Optional - for List Your Property page)

If you want to set up a separate email template for property listing submissions:

1. In the EmailJS dashboard, click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"** button
3. Fill in the template details:

### Template Settings:
   - **Template Name**: `TrueStar Property Listing` (or any name you prefer)
   - **Subject**: `New Property Listing Request - {{property_for}} | TrueStar Real Estate`

### Template Content (HTML):
   Copy and paste this HTML code:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 700px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .header .subtitle {
      margin-top: 5px;
      font-size: 14px;
      opacity: 0.9;
    }
    .gold-bar {
      height: 4px;
      background: linear-gradient(135deg, #C5A24A 0%, #EBD181 100%);
    }
    .content {
      padding: 30px;
    }
    .section {
      margin-bottom: 25px;
    }
    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: #001F3F;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #C5A24A;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }
    .info-item {
      padding: 12px;
      background: #f9f9f9;
      border-left: 3px solid #C5A24A;
      border-radius: 4px;
    }
    .info-label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .info-value {
      font-size: 16px;
      color: #001F3F;
      font-weight: 500;
    }
    .full-width {
      grid-column: 1 / -1;
    }
    .highlight-box {
      background: linear-gradient(135deg, #C5A24A15 0%, #EBD18115 100%);
      border: 2px solid #C5A24A;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
    }
    .highlight-label {
      font-size: 14px;
      color: #C5A24A;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .highlight-value {
      font-size: 20px;
      color: #001F3F;
      font-weight: bold;
    }
    .footer {
      background: #001F3F;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 12px;
    }
    .footer a {
      color: #EBD181;
      text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
      .content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🏠 New Property Listing Request</h1>
      <div class="subtitle">TrueStar Real Estate</div>
    </div>
    <div class="gold-bar"></div>
    
    <div class="content">
      <!-- Contact Information Section -->
      <div class="section">
        <div class="section-title">👤 Contact Information</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Name</div>
            <div class="info-value">{{from_name}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">{{from_email}}</div>
          </div>
          <div class="info-item full-width">
            <div class="info-label">Phone</div>
            <div class="info-value">{{phone}}</div>
          </div>
        </div>
      </div>

      <!-- Property Details Section -->
      <div class="section">
        <div class="section-title">🏢 Property Details</div>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Property For</div>
            <div class="info-value">{{property_for}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Property Type</div>
            <div class="info-value">{{property_type}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Bedrooms</div>
            <div class="info-value">{{bed}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Size (SQFT)</div>
            <div class="info-value">{{size_sqft}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Unit No.</div>
            <div class="info-value">{{unit_no}}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Location</div>
            <div class="info-value">{{location}}</div>
          </div>
        </div>
        <div class="highlight-box">
          <div class="highlight-label">Asking Price</div>
          <div class="highlight-value">{{price}}</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <p><strong>This email was sent from the TrueStar Real Estate property listing form.</strong></p>
      <p>Reply directly to: <a href="mailto:{{from_email}}">{{from_email}}</a></p>
      <p style="margin-top: 10px; opacity: 0.8;">© TrueStar Real Estate | Dubai, UAE</p>
    </div>
  </div>
</body>
</html>
```

### Template Variables:
   Make sure these variables are available (they should be automatically detected):
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Full phone number with country code
   - `{{country_code}}` - Country code (optional)
   - `{{property_for}}` - Property listing type (Sell/Rent/Manage)
   - `{{location}}` - Property location
   - `{{property_type}}` - Type of property (Villa, Apartment, etc.)
   - `{{bed}}` - Number of bedrooms
   - `{{size_sqft}}` - Property size in square feet
   - `{{unit_no}}` - Unit number
   - `{{price}}` - Asking price

4. **To Email**: Set this to `inquiry@truestar.ae`
5. **From Name**: `TrueStar Property Listing` (or leave as `{{from_name}}`)
6. **From Email**: `{{from_email}}` (so replies go to the sender)
7. Click **"Save"** button
8. Note the **Template ID** for this template (you may want to use a different template ID for property listings)

**Note:** You can use the same Service ID for both contact form and property listing forms, but you'll need separate Template IDs if you want different email formats.

---

## Step 5: Configure Your Environment Variables

1. In your project root directory, create a file named `.env.local`
2. Add these variables with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_RECIPIENT_EMAIL=Inquiry@truestar.ae
```

**Replace:**
- `service_abc123` with your actual Service ID
- `template_xyz789` with your actual Template ID
- `your_public_key_here` with your actual Public Key
- `Inquiry@truestar.ae` with your actual recipient email (if different)

---

## Step 6: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to your contact page: `http://localhost:3000/contact`
3. Fill out and submit the contact form
4. Check your email inbox (the recipient email you set)
5. You should receive the email!

---

## Quick Reference: Where to Find Each Value

| Value | Where to Find |
|-------|---------------|
| **Public Key** | Account → General → API Keys section |
| **Service ID** | Email Services → Click on your service → Service ID |
| **Template ID** | Email Templates → Click on your template → Template ID |

---

## Troubleshooting

### Emails going to wrong address (e.g., rushimuthal8@gmail.com instead of Inquiry@truestar.ae)?
- ⚠️ **This is the most common issue!**
- Go to EmailJS Dashboard → Email Templates → Click on your template
- Check the **"To Email"** field - it should be set to `Inquiry@truestar.ae` (NOT your Gmail address)
- If it's set to your Gmail or a variable, change it to `Inquiry@truestar.ae` directly
- Click **"Save"** and test again

### Email not sending?
- Check that all environment variables are set correctly
- Make sure you've restarted your dev server after adding `.env.local`
- Check EmailJS dashboard → "Logs" to see if there are any errors
- Verify your email service is connected properly

### Template variables not working?
- Make sure variable names match exactly (case-sensitive)
- Variables should be wrapped in double curly braces: `{{variable_name}}`
- Check that variables are detected in the template editor

### Getting "Configuration is missing" error?
- Make sure `.env.local` file exists in the project root
- Verify all environment variables start with `NEXT_PUBLIC_`
- Restart your development server after changing `.env.local`

---

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: Check their help center or community forum
- Test your setup in the EmailJS dashboard → "Test" section

---

**That's it!** Once you have all three values (Service ID, Template ID, and Public Key), add them to your `.env.local` file and you're ready to go! 🚀


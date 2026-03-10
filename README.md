# Truestar - Premium Real Estate Company

A luxury real estate website for Truestar, a premium real estate company based in Dubai. Built with modern design principles, featuring a golden gradient theme that conveys elegance and sophistication.

## 🏢 About

**Truestar** - Where Dubai's Vision Meets Timeless Luxury

Truestar is a premium real estate company specializing in luxury properties, exclusive developments, and exceptional investment opportunities in Dubai. This website showcases our portfolio of properties, projects, and communities while providing an elegant, high-end user experience.

## ✨ Features

- **Luxury Design** - Golden gradient theme with dark charcoal backgrounds
- **Modern UI/UX** - Clean, sophisticated interface optimized for luxury property browsing
- **Hero Section** - Bold visuals with property search functionality
- **Property Showcase** - Featured properties, top projects, and prime communities
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant transitions and hover effects
- **Developer Partnerships** - Showcase of exclusive developer relationships
- **Client Testimonials** - Social proof and reviews section
- **Contact Forms** - Functional email contact form with validation

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first CSS
- **Lucide React** - Beautiful icon system
- **Next.js Image** - Optimized image handling
- **Nodemailer** - Email functionality for contact forms

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Environment Variables Setup

Create a `.env` file in the root directory with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
RECIPIENT_EMAIL=rushimuthal8@gmail.com
```

**Note:** For Gmail, you'll need to:
1. Enable 2-Step Verification on your Google account
2. Generate an App Password at: https://myaccount.google.com/apppasswords
3. Use the generated app password (not your regular password) in `EMAIL_APP_PASSWORD`

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
truestar/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css          # Global styles with golden theme
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx     # Hero section with search
│   ├── FeaturedProperties.tsx  # Featured properties grid
│   ├── TopProjects.tsx     # Premium projects showcase
│   ├── Communities.tsx     # Prime locations
│   ├── Developers.tsx      # Developer partnerships
│   ├── WhyChooseUs.tsx     # About/features section
│   ├── Testimonials.tsx    # Client reviews
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🎨 Design System

### Color Palette

- **Gold Gradient**: `#ffd700` to `#ffed4e` - Primary accent color
- **Dark Charcoal**: `#1a1a1a` - Main background
- **Charcoal Light**: `#262626` - Card backgrounds
- **White**: `#ffffff` - Primary text
- **White/Opacity**: Various opacities for secondary text

### Typography

- **Headings**: Playfair Display (serif) - Elegant, luxury feel
- **Body**: Inter (sans-serif) - Clean, modern readability

### Key Design Elements

- Golden gradient buttons and accents
- Glass morphism effects on cards
- Smooth scroll transitions
- Hover effects with gold highlights
- Responsive grid layouts

## 📱 Sections

1. **Hero Section** - Main banner with property search form
2. **Featured Properties** - Grid of luxury properties
3. **Top Projects** - Premium off-plan developments
4. **Communities** - Prime Dubai locations
5. **Developers** - Partner developer showcase
6. **Why Choose Us** - Company features and stats
7. **Testimonials** - Client reviews and ratings
8. **Contact** - Consultation request form
9. **Footer** - Links, contact info, and social media

## 🎯 Key Features

- **Property Search** - Advanced filtering (buy/rent, type, location, price, bedrooms, bathrooms)
- **Property Cards** - Detailed property information with images
- **Project Showcase** - Off-plan developments with ROI information
- **Community Explorer** - Visual location browsing
- **Responsive Navigation** - Mobile-friendly menu
- **Contact Forms** - Easy consultation requests

## 🔧 Customization

### Colors

The golden gradient theme can be customized in `app/globals.css`:
- Update `--gold`, `--gold-dark`, `--gold-light` variables
- Modify gradient classes in utilities

### Content

- Update property data in component files
- Modify testimonials in `Testimonials.tsx`
- Adjust developer list in `Developers.tsx`
- Update contact information in `ContactSection.tsx` and `Footer.tsx`

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support, email info@truestar.ae or visit our office in Business Bay, Dubai.

---

**Truestar** - Where Dubai's Vision Meets Timeless Luxury


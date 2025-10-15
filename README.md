# Rita Sheth - Professional Henna Artist Portfolio

A modern, responsive portfolio website for Rita Sheth, a professional henna artist based in Denver, Colorado. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Beautiful, responsive design with henna-inspired color scheme
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 🖼️ **Gallery System**: Interactive photo gallery with filtering and search
- 📝 **Contact Forms**: Professional contact and booking forms
- ⚡ **Performance**: Optimized for speed with Next.js 14 and modern practices
- 🔒 **Security**: Secure form handling and data collection

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Deployment**: Vercel
- **Icons**: React Icons
- **Fonts**: Google Fonts (Playfair Display, Lato)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Mode

The website is currently configured in **Demo Mode** with:
- ✅ All UI functionality working
- ✅ Form submissions (logged to console)
- ✅ Booking request flow simulation
- ✅ Image gallery with placeholders
- ✅ Contact form simulation

All forms are currently set to demo mode and will log submissions to the console instead of sending real emails or processing payments.

## Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── about/             # About page
│   ├── booking/           # Booking page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── services/          # Services pages
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   ├── Logo.tsx          # Logo component
│   ├── HeroSection.tsx   # Homepage hero
│   ├── FeaturedWork.tsx  # Featured work section
│   ├── ServicesPreview.tsx # Services preview
│   ├── StatsSection.tsx  # Statistics section
│   └── Testimonials.tsx  # Client testimonials
├── public/               # Static assets
└── styles/              # Additional styles
```

## Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Contact Form
CONTACT_EMAIL=rita.sheth@example.com
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Features Overview

### Homepage
- Hero section with call-to-action
- Featured work showcase
- Services preview
- Client testimonials
- Statistics section

### Services Pages
- Detailed service descriptions
- Pricing information
- Process explanations
- Aftercare instructions

### Gallery
- Interactive photo gallery
- Category filtering
- Search functionality
- Image modal viewer

### Booking System
- Multi-step booking process
- Service selection
- Date/time scheduling
- Personal information collection
- Booking request submission

### Contact Forms
- Professional contact form
- Service inquiry forms
- Demo form submissions

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`. Main colors:
- Henna: Various shades of henna-inspired colors
- Gold: Complementary gold accents
- Custom gradients for visual appeal

### Content
Update content in the respective page components:
- Services: Modify service descriptions and pricing
- Gallery: Add new images and categories
- About: Update personal information and achievements

### Styling
- Global styles: `app/globals.css`
- Component styles: Individual component files
- Responsive design: Mobile-first approach with Tailwind CSS

## Support

For support or questions about this project, please contact:
- Email: rita.sheth@example.com
- Phone: (123) 456-7890

## License

This project is proprietary and confidential. All rights reserved.

## Acknowledgments

- Design inspiration from traditional henna art
- Modern web development best practices
- Community contributions to open-source libraries
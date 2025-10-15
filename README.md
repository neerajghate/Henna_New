<<<<<<< HEAD
# Rita Sheth - Professional Henna Artist Portfolio

A modern, responsive portfolio website for Rita Sheth, a professional henna artist based in Denver, Colorado. Built with Next.js 14, TypeScript, Tailwind CSS, and integrated with Stripe payments and AWS services.

## Features

- 🎨 **Modern Design**: Beautiful, responsive design with henna-inspired color scheme
- 📱 **Mobile-First**: Fully responsive design that works on all devices
- 💳 **Payment Integration**: Secure payment processing with Stripe
- ☁️ **AWS Integration**: File storage with S3 and email services with SES
- 🖼️ **Gallery System**: Interactive photo gallery with filtering and search
- 📝 **Contact Forms**: Professional contact and booking forms
- ⚡ **Performance**: Optimized for speed with Next.js 14 and modern practices
- 🔒 **Security**: Secure payment processing and data handling

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Payments**: Stripe
- **Cloud Services**: AWS (S3, SES)
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
- ✅ Payment flow simulation
- ✅ Image gallery with placeholders
- ❌ Real Stripe payments (simulated)
- ❌ Real AWS services (simulated)

To enable real integrations, uncomment the relevant code sections and add your API keys.

## Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
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
│   ├── PaymentForm.tsx   # Stripe payment form
│   └── StripeProvider.tsx # Stripe context
├── lib/                   # Utility libraries
│   └── aws.ts            # AWS integration
├── public/               # Static assets
└── styles/              # Additional styles
```

## Configuration

### Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your publishable and secret keys from the dashboard
3. Add them to your `.env.local` file
4. Set up webhooks for payment processing (optional)

### AWS Setup

1. Create an AWS account
2. Create an S3 bucket for image storage
3. Set up SES for email sending
4. Create IAM user with appropriate permissions
5. Add credentials to your `.env.local` file

### Required AWS Permissions

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "*"
    }
  ]
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

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
- Like and download features

### Booking System
- Multi-step booking process
- Service selection
- Date/time scheduling
- Personal information collection
- Secure payment processing

### Contact Forms
- Professional contact form
- Service inquiry forms
- Email notifications via AWS SES

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
=======
# Henna_Website
Sample website
>>>>>>> 573a5c3f4d55d43061dcfdf82b27579ebe5de1ae

# Mamigo Trockenbau Serbia Website

A clean, professional website for Mamigo Trockenbau Serbia cleaning services company, built with React, Vite, and Tailwind CSS.

## Features

- ✅ **Clean, Minimalistic Design** - White background with red accents matching brand colors
- ✅ **Serbian Language Content** - Professional Serbian text (Latin script) throughout
- ✅ **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop
- ✅ **Hero Section** - Bold headline with call-to-action buttons
- ✅ **Services Section** - Three service categories with professional images
- ✅ **About Section** - Company history since 2014, German quality standards, team information
- ✅ **Contact Section** - Belgrade addresses, contact form, and business information
- ✅ **Professional Trust Signals** - Years of experience, team size, quality guarantees

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Recharts** - Chart library for data visualization
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx         # Hero section with headline and CTA buttons
│   ├── Services.jsx     # Services section with 3 service categories
│   ├── About.jsx        # About section with company history and trust signals
│   └── Contact.jsx      # Contact section with form and business information
├── App.jsx              # Main application component with navigation
├── main.jsx             # Application entry point
└── index.css            # Global styles with white background
```

## Website Sections

### Navigation Header
- Fixed navigation bar with company name
- Smooth scroll to sections (Services, About, Contact)
- Mobile-responsive design with simplified mobile menu

### Hero Section
- Bold headline: "Profesionalno čišćenje – Mamigo Trockenbau Srbija"
- Tagline highlighting 2014 founding and German quality
- Trust badges showing experience and team size
- Prominent CTA buttons: "Zatraži ponudu" and phone number

### Services Section
- Three service categories with professional stock images:
  - Poslovna čišćenja (Business Cleaning)
  - Stambena čišćenja (Residential Cleaning)
  - Čišćenje garaža i magacina (Garage & Warehouse Cleaning)
- Bullet point features for each service
- Individual CTA buttons for each service

### About Section
- Company story since 2014
- German quality standards emphasis
- Team size (30+ experts) and professional values
- Trust-building elements and coverage area (Serbia-wide)

### Contact Section
- Belgrade addresses (headquarters and office)
- Contact information: phone (+381 63 33 28 33) and email
- Interactive contact form with service selection
- Coverage information and final CTA

### Design Elements
- Clean, minimalistic design with white backgrounds
- Red accent colors matching Mamigo brand
- Professional Serbian language throughout
- Mobile-responsive grid layouts
- Hover effects and smooth transitions

## Customization

### Colors
Primary cream color can be customized in `tailwind.config.js`:
```js
colors: {
  primary: {
    cream: '#F5F5DC',
    'cream-dark': '#E6E6C7',
    'cream-light': '#FFFFE0',
  },
}
```

### Content
All Serbian text content is hardcoded in the components. For easy translation or content updates, consider moving text to a separate language file.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.

# Hoffer v2 - HRVST-Inspired Tailwind CSS Landing Page

A modern, fully responsive digital agency landing page built with Tailwind CSS, inspired by the clean and bold design of [HRVST](https://gohrvst.com/). Features a minimalist design aesthetic with smooth animations, mobile-first approach, and production-ready configuration.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Tailwind CSS with custom configuration
- 🚀 Production-ready build system
- ⚡ Optimized performance
- 🎯 SEO-friendly structure
- 🔧 Easy to customize

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Build the CSS:
```bash
npm run build
```

3. Open `index.html` in your browser or serve it:
```bash
npm run serve
```

Then visit `http://localhost:8000`

## Development

To watch for changes and rebuild automatically:

```bash
npm run dev
```

This will watch your HTML and CSS files and rebuild the Tailwind CSS whenever changes are detected.

## Project Structure

```
hoffer-v2/
├── index.html          # Main HTML file
├── src/
│   └── input.css       # Tailwind source CSS
├── dist/
│   └── output.css      # Compiled CSS (generated)
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── README.md          # This file
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Fonts

The project uses Space Grotesk (for headings) and Inter (for body text) from Google Fonts. You can change these in the `<head>` section of `index.html`.

### Content

All content can be edited directly in `index.html`. The page includes:

- Clean navigation bar with mobile menu
- Bold hero section with "Digital roots, Montreal soil" headline
- Visual collage section with emoji placeholders
- Partner/technology logos section
- Intro statement section
- Featured work portfolio grid (6 projects)
- Select clients logo showcase
- Services section (2 key services)
- About section with agency philosophy
- Blog/Stories section (2 featured posts)
- Call-to-action section
- Contact information section
- FAQ, Careers, and Brief sections
- Footer with navigation and social links

## Production Build

To create a production-ready build with minified CSS:

```bash
npm run build
```

This will generate an optimized `dist/output.css` file.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Minified CSS in production
- Optimized Tailwind CSS (unused styles purged)
- Smooth scroll behavior
- Efficient animations
- Responsive images ready

## License

MIT

## Support

For issues or questions, please open an issue on GitHub or contact support.


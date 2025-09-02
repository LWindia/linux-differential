# Linux Upgradation v10 Training Landing Page

A React TypeScript landing page for Linux Upgradation v10 Training built with Vite and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Vite for fast development and building
- Payment integration with Razorpay

## Deployment

This project is configured for deployment on Vercel with the following settings:

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (recommended)

## Build Process

1. Install dependencies: `npm install`
2. Build for production: `npm run build`
3. Preview build: `npm run preview`

## Environment Variables

No environment variables are required for this deployment.

## File Structure

```
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # React components
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── vercel.json         # Vercel configuration
└── package.json         # Dependencies and scripts
```

## Payment Integration

All "Enroll Now" buttons redirect to Razorpay payment link: `https://rzp.io/rzp/9fs2rct` 
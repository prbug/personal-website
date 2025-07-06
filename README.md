# Personal Website - Next.js App

A modern personal website built with Next.js (TypeScript/React), designed for deployment on Vercel.

## 🚀 Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework

## 📁 Project Structure

```
personal-website/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout component
│       ├── page.tsx        # Main page component
│       ├── globals.css     # Global styles
│       └── components/     # React components
├── package.json           # Node.js dependencies
├── vercel.json           # Vercel configuration
├── tailwind.config.js    # Tailwind CSS config
└── tsconfig.json         # TypeScript config
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

### Installing pnpm (if not already installed)

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using curl
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

The application will be available at `http://localhost:3000`

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**

   ```bash
   pnpm add -g vercel
   ```

2. **Deploy to Vercel**

   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set up environment variables if needed
   - Deploy

### Manual Deployment

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js configuration

## 🔧 Configuration

### Vercel Configuration (`vercel.json`)

- Configures builds for Next.js
- Optimized for serverless deployment

### Environment Variables

No environment variables are required for basic functionality.

## 📝 Features

- ✅ Modern React with TypeScript
- ✅ Server-side rendering with Next.js
- ✅ Beautiful UI with Tailwind CSS
- ✅ Serverless deployment ready
- ✅ Responsive design
- ✅ Dark mode support

## 🎨 UI Features

- Responsive grid layout
- Hover effects and animations
- Dark/light mode support
- Loading states
- Error handling

## 🔍 Development Tips

1. **Frontend Development**

   - Use `pnpm dev` for hot reloading
   - Check browser console for errors
   - Use React DevTools for debugging

2. **Styling**
   - Tailwind CSS classes for rapid styling
   - Custom CSS in `globals.css` for global styles
   - Responsive design with mobile-first approach

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**

   - Change port in `package.json` scripts if needed

2. **Build errors**

   - Check TypeScript errors with `pnpm type-check`
   - Ensure all dependencies are installed with `pnpm install`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

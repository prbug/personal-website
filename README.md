# Personal Website - Full Stack App

A modern full-stack application built with Next.js (TypeScript/React) frontend and Go/Gin backend, designed for deployment on Vercel.

## 🚀 Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework

### Backend

- **Go 1.24** - Programming language
- **Gin** - HTTP web framework
- **Vercel Functions** - Serverless deployment

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout component
│   │   ├── page.tsx        # Main page component
│   │   └── globals.css     # Global styles
│   └── api/
│       └── main.go         # Go backend API
├── package.json           # Node.js dependencies
├── go.mod                 # Go dependencies
├── vercel.json           # Vercel configuration
├── tailwind.config.js    # Tailwind CSS config
└── tsconfig.json         # TypeScript config
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- Go 1.24+
- pnpm (recommended) or npm

### Frontend Setup

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

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
# Install Go dependencies
go mod tidy

# Run Go server
go run src/api/main.go
```

The backend will be available at `http://localhost:8080`

### Using Go Backend Locally

```bash
# Terminal 1: Start Go backend
go run src/api/main.go

# Terminal 2: Start Next.js frontend
pnpm dev
```

## 🌐 API Endpoints

- `GET /api/hello` - Returns a hello message with timestamp
- `GET /api/health` - Health check endpoint
- `GET /` - API information

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
   - Vercel will automatically detect Next.js and Go configurations

## 🔧 Configuration

### Vercel Configuration (`vercel.json`)

- Configures builds for both Next.js and Go
- Routes API requests to Go functions
- Sets up serverless function runtime

### Environment Variables

No environment variables are required for basic functionality.

## 📝 Features

- ✅ Modern React with TypeScript
- ✅ Server-side rendering with Next.js
- ✅ Beautiful UI with Tailwind CSS
- ✅ Go backend with Gin framework
- ✅ RESTful API endpoints
- ✅ CORS enabled for cross-origin requests
- ✅ Serverless deployment ready
- ✅ Health check endpoints
- ✅ Responsive design
- ✅ Dark mode support

## 🎨 UI Features

- Responsive grid layout
- Hover effects and animations
- Dark/light mode support
- Loading states
- Error handling
- Real-time API communication

## 🔍 Development Tips

1. **Frontend Development**

   - Use `pnpm dev` for hot reloading
   - Check browser console for errors
   - Use React DevTools for debugging

2. **Backend Development**

   - Use `go run src/api/main.go` for local testing
   - Check terminal for server logs
   - Test API endpoints with curl or Postman

3. **Styling**
   - Tailwind CSS classes for rapid styling
   - Custom CSS in `globals.css` for global styles
   - Responsive design with mobile-first approach

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**

   - Frontend: Change port in `package.json` scripts
   - Backend: Change port in `src/api/main.go`

2. **CORS errors**

   - Backend includes CORS headers
   - Check browser console for errors

3. **Build errors**
   - Run `pnpm install` to ensure dependencies
   - Run `go mod tidy` for Go dependencies

## 📄 License

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Built with ❤️ using Next.js, Go, and Vercel

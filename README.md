
#LIVE ON : https://adityakulkarniportfolio.vercel.app/

# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and interactive components.

## 🚀 Features

- **Responsive Design** - Optimized for all device sizes
- **Smooth Animations** - GSAP-powered animations and transitions
- **Modern UI** - Clean design with Tailwind CSS
- **Interactive Components** - Custom components with hover effects
- **Fast Performance** - Built with Vite for optimal loading speeds
- **3D Elements** - Three.js integration for enhanced visuals

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript
- **Styling**: Tailwind CSS 4.x
- **Animations**: GSAP
- **3D Graphics**: Three.js, OGL
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/
│   ├── about/          # About section
│   ├── contact/        # Contact form
│   ├── experience/     # Experience timeline
│   ├── footer/         # Footer component
│   ├── hero/           # Hero section
│   ├── navbar/         # Navigation bar
│   └── skills/         # Skills showcase
├── Bits/               # Reusable UI components
│   ├── DarkVeil.jsx    # Dark theme overlay
│   ├── MagicBento.jsx  # Bento grid layout
│   └── ProfileCard.jsx # Profile card component
└── lib/                # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd newPortFolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

1. **Personal Information**: Update content in component files
2. **Styling**: Modify Tailwind classes or CSS files
3. **Images**: Replace images in the `public/` directory
4. **Animations**: Customize GSAP animations in component files

## 📱 Sections

- **Hero** - Introduction and main call-to-action
- **About** - Personal background and story
- **Experience** - Work history and projects
- **Skills** - Technical skills and tools
- **Contact** - Contact form and information

## 🌐 Deployment

The project is configured for deployment on Vercel with `vercel.json` configuration.

```bash
npm run build
```

# 🏠 Pokémon Home Portfolio Website

A cozy, nostalgic portfolio website styled like a Pokémon Home interior with pixel art aesthetics and interactive elements.

## ✨ Features

- **Cozy Pokémon Home Theme**: Warm, pixelated interior design reminiscent of classic Pokémon games
- **Interactive Areas**: 5 clickable sections representing different portfolio areas
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Smooth Animations**: Fade-in effects, hover animations, and pixel-perfect transitions
- **React Router**: Seamless navigation between different sections
- **Tailwind CSS**: Modern styling with custom Pokémon-themed color palette
- **TypeScript**: Full type safety and better development experience

## 🎮 Interactive Areas

1. **📚 About Me** (Bookshelf) - Personal information and stats
2. **💻 Skills** (PC Terminal) - Technical skills with progress bars
3. **🚪 Projects** (Door) - Portfolio of completed and ongoing projects
4. **📖 Blog** (Bookshelf) - Coming soon (currently disabled)
5. **📺 Contact** (TV Console) - Social media links and contact form

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Press Start 2P Font** - Authentic pixel art typography

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd gamified-portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎨 Customization

### Colors

The project uses a custom Pokémon-themed color palette defined in `tailwind.config.js`:

- `pokemon-brown` - Warm brown tones
- `pokemon-beige` - Light beige
- `pokemon-cream` - Cream white
- `pokemon-warm` - Warm accent color
- `pokemon-dark` - Dark brown

### Content

Update the following files to customize your portfolio:

- **Personal Info**: `src/components/AboutPage.tsx`
- **Skills**: `src/components/SkillsPage.tsx`
- **Projects**: `src/components/ProjectsPage.tsx`
- **Contact**: `src/components/ContactPage.tsx`
- **Social Links**: Update URLs in `ContactPage.tsx`

### Avatar

Replace the placeholder avatar in `src/components/Avatar.tsx` with your own pixel art character sprite.

### Types

All TypeScript interfaces are defined in `src/types/index.ts` for easy customization and type safety.

## 📱 Responsive Design

The website is fully responsive and includes:

- Mobile-first design approach
- Flexible grid layouts
- Optimized touch interactions
- Readable typography on all screen sizes

## 🎯 Future Enhancements

- [ ] Add actual pixel art assets
- [ ] Implement blog functionality
- [ ] Add sound effects for interactions
- [ ] Create more interactive animations
- [ ] Add dark mode toggle
- [ ] Implement contact form backend
- [ ] Add unit tests with Jest/Vitest

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

Made with ❤️ and lots of nostalgia for classic Pokémon games!

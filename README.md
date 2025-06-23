# Bachelorette Jeopardy Game

A fun and customizable Jeopardy-style game template perfect for bachelorette parties, bridal showers, or any celebration! This Next.js application features beautiful animations, floating elements, and a fully configurable game board.

## ✨ Features

- **Fully Customizable**: Easy-to-use configuration system for all game elements
- **Beautiful Animations**: Floating objects, cherry blossoms, fireworks, and more
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Video Support**: Embed video answers for a more engaging experience
- **Modern UI**: Built with Next.js, Tailwind CSS, and shadcn/ui components
- **Easy Deployment**: Ready to deploy on Vercel with one command

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd jeopardy-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

This game is designed to be easily customizable for different people and occasions. All customization is done through the configuration file at `lib/game-config.ts`.

### What You Can Customize:

- **Game Title & Theme**: Change the title and overall theme
- **Categories & Questions**: Add your own categories and questions
- **Point Values**: Customize the point system
- **Colors & Fonts**: Choose your own color scheme and typography
- **Floating Elements**: Customize floating objects and heads with your own images
- **Animations**: Enable/disable various visual effects
- **Landing Page**: Customize the landing page image and styling

### 📖 Complete Customization Guide

For detailed customization instructions, see the **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** file. It includes:

- Step-by-step configuration instructions
- Color and font customization options
- How to add custom floating elements
- Video integration guide
- Animation settings
- And much more!

## 🎮 How to Play

1. **Landing Page**: Players see the game title and click "Let's Play!"
2. **Game Board**: Choose a category and point value
3. **Question**: Read or watch the question
4. **Answer**: Click "Show Answer" to reveal the response
5. **Return**: Go back to the board to continue playing

## 📁 Project Structure

```
jeopardy-game/
├── app/                    # Next.js app directory
│   ├── game/              # Main game board
│   ├── question/          # Question pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── floating-images.tsx
│   ├── main-game.tsx
│   └── landing-page.tsx
├── lib/
│   ├── game-config.ts    # Main configuration file
│   └── game-config-example.ts
├── public/
│   ├── videos/           # Video answers
│   └── images/           # Game images
└── CUSTOMIZATION_GUIDE.md
```

## 🎥 Video Integration

- Store video files in `public/videos/`
- Supported formats: MP4, WebM
- Videos are automatically optimized for web delivery
- Responsive video player with controls

## 🚀 Deployment

### Vercel (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Follow the prompts** to connect your repository

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📦 Dependencies

- **Next.js 15** - React framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **TypeScript** - Type safety

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy customizing! 🎉**
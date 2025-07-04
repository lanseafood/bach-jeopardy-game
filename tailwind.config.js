/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
          mouse: ['"Mouse Memoirs"', 'sans-serif'],  // Adding the mouse font
          waltograph: ['"Waltograph"', 'cursive'], // Add Waltograph font
          classyvogue: ['"ClassyVogue"', 'sans-serif'], // Add Classy Vogue font
          mogilte: ['"Mogilte"', 'sans-serif'], // Add Mogilte font
        },
      colors: {
        // Updated color palette
        sunset: {
          orange: "#FF6F4F", // Warm and inviting
          yellow: "#FDB813", // Bright, optimistic
          pink: "#FFD1DC", // Soft but lively
          babypink: "#FFDBE7", // Very light pink for answer backgrounds
          blue: "#4C9ED9", // A refreshing contrast
          lavender: "#A497C5", // Adds depth with a muted cool tone
          charcoal: "#3A3A3A", // Neutral, grounding for text or borders
          cream: "#FFE5B4", // Soft neutral for backgrounds or sections
          lightcream: "#FFF9E6", // Very light cream for answer backgrounds
          green: "#A8E6A3", // Light green for gradients

          // Mapping to functional names for easier use in components
          background: "#FFD1DC", // Coral Pink as background
          text: "#3A3A3A", // Charcoal Gray for text
          answer: "#F5E1A4", // Soft Cream for answer backgrounds
          highlight: "#FDB813", // Golden Yellow for highlights/hover
          accent: "#A497C5", // Lavender Mist for buttons
          header: "#4C9ED9", // Sky Blue for headers
          focus: "#FF6F4F", // Sunset Orange for focus/important elements
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
        "shooting-star": {
          "0%": { 
            transform: "translate(0, 0) rotate(0deg)",
            opacity: "1"
          },
          "100%": { 
            transform: "translate(100px, 100px) rotate(180deg)",
            opacity: "0"
          }
        },
        "twinkle": {
          "0%": { opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        "firework": {
          "0%": { 
            transform: "translate(0, 0) scale(1)",
            opacity: ".4",
            filter: "brightness(1)"
          },
          "50%": { 
            transform: "translate(var(--x), var(--y)) scale(0.5)",
            opacity: "0.9",
            filter: "brightness(1.2)"
          },
          "100%": { 
            transform: "translate(var(--x), var(--y)) scale(0)",
            opacity: "0",
            filter: "brightness(0.8)"
          }
        },
        "float": {
          "0%": { 
            transform: "translateY(-10vh) translateX(0px) rotate(0deg)",
            opacity: "0"
          },
          "10%": { 
            opacity: "1"
          },
          "90%": { 
            opacity: "1"
          },
          "100%": { 
            transform: "translateY(110vh) translateX(100px) rotate(360deg)",
            opacity: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.5s ease-out forwards",
        "bounce-subtle": "bounce-subtle 2s infinite",
        "shooting-star": "shooting-star 1s ease-out forwards",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "firework": "firework 3s ease-out forwards",
        "float": "float 20s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        bento: {
          bg: '#FDFCF8',
          card: '#FFFFFF',
          dark: '#1C1917',
          darker: '#0F0E0D',
          border: '#E5E3DF',
          'border-subtle': '#E7E5E4',
          'border-dark': '#292524',
          text: '#1C1917',
          muted: '#78716C',
          subtle: '#A8A29E',
          surface: '#F5F5F4',
          warm: '#FEF3C7',
          amber: '#F59E0B',
          emerald: '#22C55E',
          sky: '#3B82F6',
          violet: '#8B5CF6',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'bento-sm': '12px',
        'bento-md': '18px',
        'bento-lg': '24px',
        'bento-xl': '28px',
        'bento-2xl': '32px',
        'bento-3xl': '40px',
        'bento-pill': '100px',
      },
      boxShadow: {
        'bento-sm': '0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)',
        'bento': '0 4px 20px -2px rgba(28,25,23,0.04), 0 2px 6px -1px rgba(28,25,23,0.02)',
        'bento-hover': '0 12px 32px -4px rgba(28,25,23,0.08), 0 4px 12px -2px rgba(28,25,23,0.04)',
        'bento-dark': '0 10px 40px -10px rgba(0,0,0,0.3)',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'blob-float': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(10px, -15px) scale(1.03)' },
        },
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'blob-float': 'blob-float 12s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

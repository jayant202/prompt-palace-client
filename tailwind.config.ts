import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chat: {
					bg: 'hsl(var(--chat-bg))',
					surface: 'hsl(var(--chat-surface))',
					border: 'hsl(var(--chat-border))',
					user: {
						DEFAULT: 'hsl(var(--user-message))',
						foreground: 'hsl(var(--user-message-foreground))'
					},
					bot: {
						DEFAULT: 'hsl(var(--bot-message))',
						foreground: 'hsl(var(--bot-message-foreground))'
					},
					input: {
						DEFAULT: 'hsl(var(--input-bg))',
						border: 'hsl(var(--input-border))',
						focus: 'hsl(var(--input-focus))'
					},
					send: {
						DEFAULT: 'hsl(var(--send-button))',
						hover: 'hsl(var(--send-button-hover))'
					}
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-surface': 'var(--gradient-surface)',
				'gradient-chat': 'var(--gradient-chat-bg)'
			},
			boxShadow: {
				'message': 'var(--shadow-message)',
				'input': 'var(--shadow-input)',
				'send': 'var(--shadow-send)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'xl': '1rem',
				'2xl': '1.5rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'message-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'send-pulse': {
					'0%': {
						transform: 'scale(1)',
						boxShadow: 'var(--shadow-send)'
					},
					'50%': {
						transform: 'scale(1.05)',
						boxShadow: '0 6px 20px hsla(217 91% 60% / 0.4)'
					},
					'100%': {
						transform: 'scale(1)',
						boxShadow: 'var(--shadow-send)'
					}
				},
				'typing': {
					'0%, 60%, 100%': {
						transform: 'translateY(0)'
					},
					'30%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'message-in': 'message-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'send-pulse': 'send-pulse 0.3s ease-out',
				'typing': 'typing 1.4s infinite ease-in-out'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

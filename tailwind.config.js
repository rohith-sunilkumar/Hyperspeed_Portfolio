/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#fdfbf8',
                secondary: '#2d62ff',
                accent: '#ee4b2b',
                brand: {
                    bg: '#fdfbf8',
                    black: '#000000',
                    dark: '#121212',
                    charcoal: '#333333',
                    muted: '#7b7b7a',
                    gray: '#999999',
                    border: '#d9d9d9',
                    blue: '#2d62ff',
                    red: '#ee4b2b',
                },
            },
            fontFamily: {
                sans: ['var(--font-plus-jakarta)', '"Neue Montreal"', 'Inter', 'system-ui', 'sans-serif'],
                serif: ['"Times New Roman"', 'Times', 'serif'],
            },
            borderRadius: {
                'brand-sm': '1px',
                'brand-md': '13px',
                'brand-lg': '16px',
                'brand-full': '100px',
            },
            spacing: {
                'px': '1px',
                '8': '32px',
                '9.5': '38px',
                '11': '45px',
                '13': '51px',
                '16': '64px',
                '22.5': '90px',
                '24': '96px',
                '28.75': '115px',
                '38.5': '154px',
            },
            transitionDuration: {
                '200': '200ms',
                '400': '400ms',
            },
            animation: {
                'fade-in': 'fadeIn 0.4s ease-in-out',
                'slide-up': 'slideUp 0.4s ease-out',
                'slide-down': 'slideDown 0.4s ease-out',
                'slide-left': 'slideLeft 0.4s ease-out',
                'slide-right': 'slideRight 0.4s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideLeft: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}

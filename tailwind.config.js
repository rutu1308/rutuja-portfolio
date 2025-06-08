/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce': 'bounce 1s infinite',
            },
            keyframes: {
                'animation-delay-2000': {
                    'animation-delay': '2s',
                }
            }
        },
    },
    plugins: [],
}
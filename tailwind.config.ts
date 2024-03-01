import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'custom-red': '#FF6B6B',
                'custom-gray': '#526D82',
                'custom-black': '#292F36',
                'custom-white': '#FFFBFA',
            },
            fontSize: {
                '10xl': '9rem',
                '11xl': '16rem',
                '12xl': '20rem',
                '15xl': '26rem',
            },
            height: {
                '100v': '100vh',
                '125v': '125vh',
                '150v': '150vh',
            },
        },
    },
    plugins: [],
};

export default config;

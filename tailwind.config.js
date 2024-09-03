/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                gray: {
                    50: '#F3F3F3',
                    400: '#929398',
                    500: '#5C6169',
                    600: '#6C6D73',
                    800: '#414245',
                    900: '#323235',
                },
                blue: {
                    100: '#C5D2F5',
                    400: '#698BE5',
                    500: '#436EDF',
                    600: '#3D64CB',
                },
            },
        },
    },
    plugins: [],
};

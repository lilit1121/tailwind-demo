"use strict";
/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['public/*.{html,js}', 'src/*.{html,js,ts}'],
    theme: {
        extend: {
            lineHeight: {
                '44': '44px',
                '30': '30px',
                '26': '26px',
            },
            spacing: {
                '10-percent': '10%',
                '17-percent': '17%',
                '28-percent': '28%',
                '39-percent': '39%',
                '22': '22px',
                '30': '30px',
                '50': '50px',
                '60': '60px',
                '70': '70px',
                '86': '86px',
                '90': '90px',
                '120': '120px',
                '236': '236px',
                '655': '655px'
            },
            fontSize: {
                '20': '20px',
                '64': ['64px', '72px'],
                'xs': '.75rem',
                'sm': '.875rem',
                'tiny': '.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
            },
            dropShadow: {
                'drop': '0px 6px 10px rgba(96, 4, 56, 0.16)',
            },
            flexGrow: {
                '1.5': 1.5
            },
            boxShadow: {
                'gray-shadow': '0px 0px 20px rgba(34, 4, 21, 0.1)',
                'light-shadow': '0px 0px 20px rgba(248, 248, 248, 0.2)',
                'low': 'box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);'
            },
            borderRadius: {
                '10': '10px'
            }
        },
        screens: {
            'xs': { max: '320px' },
            'sm': { max: '640px' },
            'md': { max: '768px' },
            'lg': { max: '1024px' },
            'xl': { max: '1280px' },
            'xxl': { max: '1700px' },
            'xxxl': { max: '1920px' },
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            newake: ['newake', 'sans-serif']
        },
        colors: {
            'gray': '#222222',
            'pink': '#F8028E',
            'white': '#FFFFFF',
            'creamy': '#F5F5F5',
            'light-gray': 'rgba(228, 228, 228, 0.05)',
            'dark-gray': 'rgba(228, 228, 228, 0.1)',
            'shade-of-gray': 'rgba(228, 228, 228, 0.1)',
            'shade-of-gray1': 'rgba(228, 228, 228, 0.2)',
            'dark': 'rgba(0, 0, 0, 0.1)',
        },
    },
    plugins: [],
};

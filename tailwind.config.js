module.exports = {
    purge: [
        '*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'barlow': 'Barlow',
                'fraunces': 'Fraunces',
            },
            colors: {
                'design-soft-red': 'hsl(7, 99%, 70%)',
                'design-yellow': 'hsl(51, 100%, 49%)',
                'design-dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
                'design-dark-blue': 'hsl(198, 62%, 26%)',
                'design-dark-moderate-cyan': ' hsl(168, 34%, 41%)',
                'background-color-cyan': '#3dbeff'
            },
            backgroundImage: theme => ({
                'graphic-design': "url(/images/desktop/image-graphic-design.jpg)",
                'photography': "url(/images/desktop/image-photography.jpg)",
                'mobile-graphic-design': "url(/images/mobile/image-graphic-design.jpg)",
                'mobile-photography': "url(/images/mobile/image-photography.jpg)",
            })
        },

    },
    variants: {
        extend: {},
        display: ['responsive', 'group-hover', 'group-focus'],
    },
    plugins: [],
}
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: theme => ({
                "image-1": "url('/src/images/img-1.jpg')",
            }),
            colors: {
                'matching-palette-1': '#0B0C10',
                'matching-palette-2': '#1F2833',
                'matching-palette-3': '#C5C6C7',
                'matching-palette-4': '#66FCF1',
                'matching-palette-5': '#45A29E',
            },
            variants: {
                textTransform: ['responsive', 'hover', 'focus'],
            },
        },
        plugins: [],
    }
};


// theme/index.ts

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        offWhite: '#F5F2ED' ,
        beige: '#E8DFD0' ,
        beigeM: '#D4C4A8' ,
        navy: '#1B2A4A' ,
        navyA: '#2E4470' ,
    },

    fonts: {
        heading: `'Playfair Display', serif` ,
        body: `'DM Sans', sans-serif` ,
        mono: `'DM mono', monospace`,
    },

    styles: {
        global:{
            body:{
                bg: 'offWhite' ,
                color: 'navy' ,
            },
        },
    },
})

export default theme;
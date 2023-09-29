"use client";

import React from 'react'
import { ThemeProvider } from '@mui/material';
import theme from './theme.js';



const layout = ({ children }) => {
    return (
        <html lang="en">

            <head>
                <meta name="description" content="Omar medhat Omar" />
            </head>

            <body >
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>



            </body>
        </html >
    )
}

export default layout
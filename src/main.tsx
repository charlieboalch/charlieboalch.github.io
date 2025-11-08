import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Home from "./Home";

import {createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import {Projects} from "./Projects";
import {MainLayout} from "./layouts/MainLayout";
import {About} from "./About";

let lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#333333',
            secondary: '#6B7280',
        },
        primary: {
            main: '#3B82F6', // Slate Blue
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#2563EB', // Royal Blue (for hovers or accents)
        },
        divider: '#E5E7EB',
    },
    typography: {
        fontFamily: 'Inter, Roboto, sans-serif',
    },
});

lightTheme = responsiveFontSizes(lightTheme)

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <ThemeProvider theme={lightTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="projects" element={<Projects/>}/>
                        <Route path="about" element={<About/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
)

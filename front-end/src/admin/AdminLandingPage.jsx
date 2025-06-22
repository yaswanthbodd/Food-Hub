import { Box, Container, createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { SideDrawer } from "./components/side-panel/SideDrawer";
import { Outlet } from 'react-router-dom';
import { useState } from "react";

export const AdminLandingPage = () => {
    const [mode, setMode] = useState('dark');

    const theme = createTheme({
        palette: {
        mode: mode, // 'light' or 'dark'
        },
    });

    return (
        <ThemeProvider theme={theme}>
        {/* CssBaseline applies global styles based on theme */}
        <CssBaseline />  
            <Container>
                <Box>
                    <Navbar mode={mode} setMode={setMode}/>
                    <SideDrawer />
                    <Outlet />
                </Box>
            </Container>
        </ThemeProvider>
    );
    };

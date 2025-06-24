import {Box, Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import UserNavbar from './components/navsection/UserNavbar'
import { useState } from 'react'
import UserHero from './components/herosection/UserHero';


const UserLandingPage = () => {
    const [mode, setMode] = useState('dark');

    //Create the theme
    const theme = createTheme({
        palette : {
            mode : mode
        }
    })
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
            <Box>
                <UserNavbar mode={mode} setMode={setMode}/>
                <UserHero />
            </Box>
        </Container>
    </ThemeProvider>
  )
}

export default UserLandingPage
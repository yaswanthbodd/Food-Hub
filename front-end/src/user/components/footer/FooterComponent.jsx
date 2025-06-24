import { Box, Button, IconButton, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'

export const iconButtons = [
    {
        iconbutton: FacebookIcon,
        iconColor: 'info',
        to: '',
    },
    {
        iconbutton: LinkedInIcon,
        iconColor: 'info',
        to: 'https://www.linkedin.com/in/yaswanth-boddu/'
    },
    {
        iconbutton: XIcon,
        iconColor: 'inherit',
        to: 'https://x.com/yaswanth_19_1_9'
    },
    {
        iconbutton: InstagramIcon,
        iconColor: 'error',
        to: 'https://www.instagram.com/yaswanth_19_1_9/'
    },
    ]

    const FooterComponent = () => {
    return (
        <Box sx={{ py: 4 }}>
        <LinearProgress variant="determinate" value={100} sx={{ height: '0.5px', mb: 4 }} />

        <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            flexWrap="wrap"
            spacing={4}
        >
            {/* Social Media Icons */}
            <Stack direction="row" gap={2}>
            {iconButtons.map((button, index) => (
                <IconButton href={button.to} target='_blank' key={index} sx={{ border: '1px solid yellow' }}>
                    <button.iconbutton color={button.iconColor} />
                </IconButton>
            ))}
            </Stack>

            {/* Company Links */}
            <Stack direction="column" spacing={1}>
            <Typography fontWeight={700} paddingLeft={4}>COMPANY</Typography>
            <Button variant="text">Home</Button>
            <Button variant="text">About Us</Button>
            <Button variant="text">Delivery</Button>
            <Button variant="text">Privacy Policy</Button>
            </Stack>

            {/* Contact Info */}
            <Stack direction="column" spacing={1}>
            <Typography fontWeight={700}>GET IN TOUCH</Typography>
            <Typography>📞 +91-9838489899</Typography>
            <Typography>📧 contact@foodhub.com</Typography>
            </Stack>
        </Stack>

        {/* Optional Footer Bottom */}
        <LinearProgress color='success' variant='determinate' sx={{height : '0.5px', mt : 2}}/>
        <Typography
            textAlign="center"
            mt={4}
            variant="body1"
            color="text.secondary"
        >
            © {new Date().getFullYear()} FoodHub. All rights reserved.
        </Typography>
        </Box>
    )
}

export default FooterComponent

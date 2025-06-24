import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { iconButtons as icons } from '../footer/FooterComponent'

const MeetDeveloper = () => {
    return (
        <Box display='flex' alignItems={'center'} justifyContent={'center'}>
            <Box component={Paper} width={'60%'} padding={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} elevation={4} borderRadius={7}>
                <Typography variant='h5' fontWeight={700} color='error'>Meet Our Developer</Typography>
                <Stack direction={'row'}>
                    <Typography>I'm Yaswanth Boddu, a CSE student skilled in full-stack development using React.js, Spring Boot, Node.js, MySQL, and MongoDB.I’ve built technical projects like a blockchain-based Land Record Management System, a FoodHub inventory app, and tourism forecasting using ML.I have hands-on experience with tools like GitHub, Postman, Eclipse, VS Code, and RESTful APIs. I continuously explore emerging technologies to build scalable solutions.</Typography>
                    <img className="rounded-full border-1 border-b-amber-300 p-3 border-l-blue-700 border-r-emerald-700 border-t-red-700" width={200} src="/images/yaswanth_im.png" alt="Developer" />
                </Stack>
                
                <Stack direction={'row'}>
                    {
                        icons.map((icon,index)=>(
                            <IconButton href={icon.to} target='_blank' sx={{ border: '1px solid yellow', mr : 2}} key={index}>
                                <icon.iconbutton color={icon.iconColor}/>
                            </IconButton>
                        ))
                    }
                    
                </Stack>
            </Box>
            
        </Box>
    )
}

export default MeetDeveloper
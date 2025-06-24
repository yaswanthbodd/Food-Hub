import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const DownloadApp = () => {
    return (
        <Box marginTop={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant='h3'>For Better Experience Download FoodHub App</Typography>

            {/* Svg Images downloads */}
            <Stack direction={'row'} gap={3}>
                <img src='/images/google-play.svg' alt='Get In Google Play' width={'200px'}/>
                <img src='/images/apple-store.svg' alt='Get In Apple Store' width={'200px'}/>
            </Stack>

        </Box>
    )
}

export default DownloadApp
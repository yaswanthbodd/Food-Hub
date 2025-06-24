import { Box, Card, CardContent, Skeleton, Stack } from '@mui/material'
import React from 'react'

const CardSkeletion = () => {
    return (
        <Box width={'260px'}>
            <Card sx={{ height : '360px', display : 'flex' , flexDirection : 'column'}} elevation={3}>
                <Skeleton variant='rectangular' height={140} />
                <CardContent>
                    <Skeleton variant='text' height={30} width={'80%'}/>
                    <Skeleton variant='text' height={20} width={'40%'} />
                    <Stack direction={'row'} justifyContent={'space-between'} mt={1}>
                        <Skeleton variant='text' width={"30%"}/>
                        <Skeleton variant='circular' width={30} height={30}/>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}

export default CardSkeletion
import { Box, Button, Card, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import CardSkeletion from '../skeletions/CardSkeletion';

const CardItem = () => {
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetching All items
    useEffect(()=>{
        axios.get('http://localhost:8080/api/items')
        .then((response)=>{ 
            setItems(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
    })
    },[])

    return (
        <Box marginTop={5} marginBottom={5}>
            <Typography fontSize='30px' fontWeight={800} marginBottom={2}>Top Dishes Near You</Typography>
            <Stack direction={'row'} flexWrap={'wrap'} gap={3} justifyContent={'center'}>
            {
                loading ? Array.from({length : 8}).map((_,i)=> <CardSkeletion key={i} />)
                : items.map((item,index)=>(
                    <Box key={index} width={'260px'}>
                        <Card sx={{ height : '360px', display : 'flex', flexDirection: 'column'}} className='hover:scale-95 hover:cursor-pointer' elevation={3}>
                            <CardMedia component={'img'} height='140' image={`http://localhost:8080/api/item/${item.id}/image`} alt={item.productName}/>
                            <CardContent>
                                <Stack direction={'row'} gap={1}>
                                    <Typography variant='h6' fontWeight={600} gutterBottom sx={{flexGrow : 1}}>{item.productName}</Typography>
                                    <Rating sx={{mt : 1}} value={item.productRating} precision={0.5} size='small' readOnly/>
                                </Stack>
                                <Typography fontSize='10px' variant='body2' gutterBottom>{item.productType}</Typography>
                                <Stack direction={'row'}>
                                <Typography marginTop={1} sx={{flexGrow : 1}} color='success'><CurrencyRupeeIcon fontSize='small' />{item.productPrice}</Typography>
                                <Button><AddIcon /></Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                ))
            }
            </Stack>
            
        </Box>
    )
}

export default CardItem
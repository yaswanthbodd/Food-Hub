import { Stack, IconButton, Typography, Box, LinearProgress } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef, useState } from 'react';
import CardItem from '../dishes/CardItem';
import axios from 'axios';
import SingleCard from '../dishes/SingleCard';
import AccordionQuestions from '../accordion/AccordionQuestions';
import DownloadApp from '../downloader/DownloadApp';
import FooterComponent from '../footer/FooterComponent';

const itemList = [
    {
        imgSrc : '/images/jar-ice-cream.png',
        imgText : 'Deserts'
    },
    {
        imgSrc : '/images/bread-sandwich.png',
        imgText : 'Sandwich'
    },
    {
        imgSrc : '/images/butterscotch-cake.png',
        imgText : 'Cake'
    },
    {
        imgSrc : '/images/chicken-rolls.png',
        imgText : 'Rolls'
    },
    {
        imgSrc : '/images/chicken-salad.png',
        imgText : 'Salad'
    },
    {
        imgSrc : '/images/fried-cauliflower.png',
        imgText : 'Pure Veg'
    },
    {
        imgSrc : '/images/tomato-pasta.png',
        imgText : 'Pasta'
    },
    {
        imgSrc : '/images/veg-noodles.png',
        imgText : 'Noodles'
    },
]

export default function UserHero() {
    const scrollRef = useRef(null);
    const [singleItem, setSingleItem] = useState(null);
    const [singleItemData, setSingleItemData] = useState([]);
    const [loading, setLoading] = useState(true);


    const scroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return;

        const scrollAmount = 250; // pixels to scroll
        current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
        });
    };

    // Single Item Handler Based on the Category
    const handleSingleItem = (item)=>{
        setSingleItem(item);
        axios.get(`http://localhost:8080/api/items/category/${item}`)
        .then((response)=>{
            setSingleItemData(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            console.log('Error ',error)
            setLoading(false);
        })
    }
    
    return (
        <Box>
            <Stack margin={5}>
                <Typography fontSize='30px' fontWeight={800}>
                    What's on your mind?
                </Typography>
                <Typography variant='body2' marginRight="50%" component="div">
                    FoodHub is your one-stop destination for delicious, freshly prepared meals — from street-style snacks to chef-crafted cuisines. Discover, order, and enjoy food like never before!. Craving something tasty? FoodHub brings your favorite dishes right to your door! With easy ordering, fast delivery, and mouthwatering choices, we turn every meal into a moment to enjoy.
                </Typography>
            </Stack>

            <Box position="relative">
                {/* Left Arrow */}
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{ position: 'absolute', left: 0, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}
                >
                    <ArrowBackIosIcon />
                </IconButton>

                {/* Scrollable Stack */}
                <Stack
                    direction="row"
                    gap={4}
                    marginX={7}
                    ref={scrollRef}
                    sx={{
                        cursor : 'pointer',
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                    paddingY: 2,
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    {itemList.map((item, index) => (
                    <Stack
                        key={index}
                        sx={{ minWidth: 'auto', flexShrink: 0, alignItems: 'center' }}
                    >
                        <img
                        src={item.imgSrc}
                        alt={item.imgText}
                        className="w-32 h-32 rounded-full object-cover"
                        onClick={() => handleSingleItem(item.imgText)}
                        />
                        <br/>
                        <Typography textAlign="center">{item.imgText}</Typography>
                    </Stack>
                    ))}
                </Stack>

                {/* Right Arrow */}
                <IconButton
                    onClick={() => scroll('right')}
                    sx={{ position: 'absolute', right: 0, top: '50%', zIndex: 1, transform: 'translateY(-50%)' }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>

            <LinearProgress sx={{height : '1px', mt : 4}}/>

            {/* CardDishes */}
            {
                singleItem === null ? <CardItem /> : <SingleCard singleItemData={singleItemData} loading={loading}/>
            }

            <AccordionQuestions />
            <DownloadApp />
            <FooterComponent />
        </Box>
    );
}

import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

    const accordInfo = [
    {
        accordSummary: '1. What is FoodHub?',
        accordDetail: 'FoodHub is an online food delivery platform that connects users with local restaurants and chefs. You can browse menus, place orders, and have delicious food delivered right to your doorstep.'
    },
    {
        accordSummary: '2. How do I place an order on FoodHub?',
        accordDetail: 'Simply browse through the available dishes or categories, add your favorite items to the cart, and proceed to checkout. You can select your delivery address, choose a payment method, and confirm the order.'
    },
    {
        accordSummary: '3. What types of food are available?',
        accordDetail: 'FoodHub offers a wide range of cuisines including vegetarian, non-vegetarian, desserts, snacks, pastas, rolls, noodles, and healthy salads. There’s something for every taste and preference.'
    },
    {
        accordSummary: '4. Can I track my order after placing it?',
        accordDetail: 'Yes, once your order is confirmed, you’ll receive real-time updates about its preparation and delivery status. You can also view the estimated delivery time from your order history.'
    },
    {
        accordSummary: '5. What payment methods does FoodHub accept?',
        accordDetail: 'FoodHub accepts multiple payment options including UPI, credit/debit cards, net banking, and cash on delivery (COD) for selected locations.'
    },
    ];

    const AccordionQuestions = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panelId) => (event, isExpanded) => {
        setExpanded(isExpanded ? panelId : false);
    };

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={5} mb={5}>
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={2}>
            Frequently asked questions from FoodHub
        </Typography>

        <Box width="700px">
            {accordInfo.map((info, index) => {
            const panelId = `panel-${index}`;
            return (
                <Accordion
                key={index}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
                sx={{ marginTop: 2, borderRadius : 1 }}
                
                >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {info.accordSummary}
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{info.accordDetail}</Typography>
                </AccordionDetails>
                </Accordion>
            );
            })}
        </Box>
        </Box>
    );
    };

export default AccordionQuestions;

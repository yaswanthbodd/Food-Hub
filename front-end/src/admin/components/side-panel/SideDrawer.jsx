import { Box, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { useState } from "react"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import { AddItem } from "../add-items/AddItem";

// List of Side Panel Items
const sidePanelLists = [
    {
        icon : AddCircleOutlineIcon,
        iconColor : 'error',
        primary : 'Add Item',
        color : 'red',
        to : '/admin/add-item'
    },
    {
        icon : PostAddIcon,
        iconColor : 'success',
        primary : 'List Items',
        color : 'green',
        to : '/admin/list-items'
    },
    {
        icon : AddShoppingCartIcon,
        iconColor : 'secondary',
        primary : 'OrderItems',
        color : 'purple',
        to : '/admin/order-items'
    },
]

//Framer Motion for ReactJs Components
const SidePanel = motion(Box)
const MotionDrawer = motion(Drawer)

export const SideDrawer = ()=>{
    
    return(
        <SidePanel>
            <MotionDrawer initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 1, ease : 'easeIn'}} variant="permanent" anchor="left" open={true}>
                <Box p={2} width={'200px'} textAlign={'center'} role='presentation'>
                    <Typography marginTop={4} fontWeight={700}>Side Panel</Typography>
                    <Divider sx={{ marginTop : 1}} color="success" />
                    {
                        sidePanelLists.map((list,index)=>(
                            <List key={index}>
                                <ListItem disablePadding sx={{ marginTop : 2}}>
                                    <ListItemButton  component={Link} to={list.to} disablePadding>
                                        <ListItemIcon>
                                            <list.icon color={list.iconColor} />
                                        </ListItemIcon>
                                        <ListItemText 
                                            primary={list.primary} 
                                            slotProps={{
                                                primary: {
                                                sx: {
                                                    color: `${list.color}`,
                                                    fontWeight: 'bold',
                                                },
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        ))
                    }
                </Box>
            </MotionDrawer>
        </SidePanel>
    )
}
import { AppBar, Box, Toolbar,IconButton,Typography, Button, TextField, InputAdornment, Snackbar, Avatar } from '@mui/material'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import {isLoggedIn , getUserInfo, logout} from '../authentication/loggedin/Auth';
import MuiAlert from '@mui/material/Alert';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import { blue, pink } from '@mui/material/colors';

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

// Svg Framer motion
const svgVariants = {
    hidden : {
        rotate : -180
    },
    visible : {
        rotate : 0,
        transition : {
            duration : 1
        }
    }
}

const pathVariants = {
    hidden : {
        opacity : 0,
        pathLength : 0
    },
    visible : {
        opacity : 1,
        pathLength : 1,
        transition : {
            duration : 3,
            ease : 'easeInOut'
        }
    }
}

// const logouted = logout();

const UserNavbar = ({mode, setMode}) => {

    const loggedIn = isLoggedIn();
    const user = getUserInfo();
    const gender = localStorage.getItem("gender");
    
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setSnackbarOpen(true);
        navigate("/");
    }

    // DarkMode
    const toggleMode = () => {
            setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };
  return (
    <MotionBox initial={{opacity : 0}} animate = {{opacity : 1}} transition={{delay : 0.7, duration : 0.7}} >
        <AppBar position='static' color='white' elevation={1} sx={{flexGrow : 1}}>
            <Toolbar>
                <IconButton onClick={()=>{
                    navigate("/")
                }}>
                            <motion.svg variants={svgVariants} initial='hidden' animate='visible' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 128 128" xml:space="preserve"><motion.path fill="red" variants={pathVariants}                   d="m44.867 34.311-3.219-2.389L63.357 2.665l2.288 2.309h2.577l.981 3.959 5.094 16.577-3.832 1.178-5.139-16.737-.24-.968h-1.113l-.179-.18z"/>
                            <motion.path variants={pathVariants} fill="blue" d="M117.945 116.021h-12.808v-4.008h9.214l9.177-83.651H64.976c.562 4.825 1.266 10.068 1.948 15.162.795 5.923 1.616 12.049 2.216 17.517l-3.985.437c-.594-5.42-1.412-11.521-2.203-17.421-.793-5.91-1.612-12.022-2.212-17.48l-.243-2.223H128l-10.055 91.667z"/>
                            <motion.path variants={pathVariants} fill="orange" d="M64.192 33.602h42.485v4.009H64.192zM106.307 72.926l-3.013-2.646a13 13 0 0 0 3.227-8.586c0-7.131-5.73-12.932-12.773-12.932-7.042 0-12.772 5.801-12.772 12.932h-4.008c0-9.341 7.527-16.94 16.78-16.94 9.254 0 16.782 7.6 16.782 16.94a17.023 17.023 0 0 1-4.223 11.232zM54.001 125.336c-14.325 0-28.646-2.063-40.33-6.184-5.053-1.826-9.034-5.768-9.081-8.979v-2.65c-.015-.977.404-2.877 3.381-4.297l1.727 3.617c-.753.359-1.023.658-1.099.762v2.539c.012.83 2.277 3.734 6.421 5.232 22.22 7.84 55.754 7.838 77.989-.004 4.127-1.494 6.395-4.402 6.407-5.26v-2.51c-.124-.17-.607-.604-1.738-1.029l1.413-3.752c3.809 1.436 4.35 3.58 4.334 4.73v2.592c-.05 3.24-4.033 7.18-9.067 9.002-11.696 4.126-26.029 6.191-40.357 6.191zM8.775 88.246c-1.95-.813-4.215-2.572-4.185-4.861v-2.596c.048-3.234 4.03-7.176 9.066-9 23.39-8.25 57.316-8.25 80.685-.006 5.051 1.826 9.034 5.766 9.083 8.975v2.654c.018 1.174-.568 3.404-4.692 4.832l-1.31-3.789c1.31-.453 1.858-.936 1.993-1.121v-2.545c-.013-.828-2.279-3.734-6.422-5.23-22.217-7.838-55.752-7.836-77.987.004-4.128 1.496-6.395 4.4-6.407 5.256v2.488c.132.227.677.807 1.718 1.24l-1.542 3.699z"/>
                            <motion.path variants={pathVariants} fill="green" d="M96.011 106.754H11.02C4.943 106.754 0 101.768 0 95.639c0-6.127 4.943-11.113 11.02-11.113h84.991c6.076 0 11.019 4.986 11.019 11.113-.001 6.129-4.943 11.115-11.019 11.115zM11.02 88.535c-3.865 0-7.011 3.188-7.011 7.104 0 3.918 3.146 7.107 7.011 7.107h84.991c3.865 0 7.011-3.189 7.011-7.107 0-3.916-3.146-7.104-7.011-7.104H11.02z"/>
                            <motion.path variants={pathVariants} fill="#282D33" d="M96.011 98.471c-2.813 0-4.291-.6-5.597-1.131-1.15-.467-2.06-.836-4.09-.836-2.027 0-2.936.369-4.086.836-1.305.531-2.784 1.131-5.599 1.131-2.813 0-4.291-.6-5.596-1.131-1.148-.467-2.056-.836-4.083-.836s-2.936.369-4.085.836c-1.305.531-2.784 1.131-5.597 1.131-2.812 0-4.289-.6-5.594-1.131-1.149-.467-2.057-.836-4.084-.836s-2.935.369-4.082.836c-1.305.531-2.782 1.131-5.593 1.131s-4.289-.6-5.593-1.131c-1.149-.467-2.057-.836-4.084-.836-2.026 0-2.934.369-4.083.836-1.305.531-2.782 1.131-5.595 1.131-2.811 0-4.289-.6-5.593-1.131-1.149-.467-2.057-.836-4.085-.836v-4.01c2.812 0 4.291.602 5.595 1.133 1.148.467 2.056.836 4.083.836 2.028 0 2.936-.369 4.085-.836 1.304-.531 2.782-1.133 5.593-1.133 2.812 0 4.29.602 5.594 1.133 1.148.467 2.056.836 4.083.836 2.026 0 2.934-.369 4.082-.836 1.304-.531 2.781-1.133 5.593-1.133s4.289.602 5.594 1.133c1.149.467 2.057.836 4.084.836 2.029 0 2.938-.369 4.087-.836 1.305-.531 2.783-1.133 5.595-1.133 2.811 0 4.29.602 5.593 1.133 1.15.467 2.058.836 4.086.836 2.031 0 2.939-.369 4.09-.836 1.305-.531 2.783-1.133 5.595-1.133 2.813 0 4.293.602 5.599 1.133 1.149.467 2.058.836 4.088.836v4.008z"/>
                            </motion.svg>
                </IconButton>
                <MotionTypography initial={{opacity : 0}} animate={{opacity : 1}} transition={{ delay : 1, duration : 0.7, ease : 'linear'}} component='div' sx={{ flexGrow: 1 }} color="error" fontWeight={700}>Food-Hub</MotionTypography>
                
                {
                    !loggedIn ? (<Button component={Link} to='/register' sx={{fontWeight : 'bold', mr : 2}} color='error' startIcon={<SensorOccupiedIcon/>}>SIGN IN</Button>) : (<Button onClick={handleLogout} sx={{fontWeight : 'bold', mr : 2}} color='error' startIcon={<SensorOccupiedIcon/>}>Log Out</Button>)
                }
                

                {
                    loggedIn ? ( <Button sx={{mr : 2}} size='large' startIcon={<ShoppingCartIcon fontSize='large'/>}></Button> ) : 
                    (<Button sx={{mr : 2}} size='large' startIcon={<RemoveShoppingCartIcon fontSize='large'/>}></Button>)
                }

                {
                    loggedIn ? ( gender === 'Male' ? (<Avatar sx={{ bgcolor : blue[500]}}> <PersonIcon /> </Avatar>) : (<Avatar sx={{ bgcolor : pink[500]}}> <Person2Icon /> </Avatar>) ) : ''
                }

                <TextField placeholder='Search' sx={{ width : '180px', mr : 2, ml : 2}} InputProps={{ startAdornment : <InputAdornment><SearchIcon /></InputAdornment> }} size='small' />
                <IconButton size="small" onClick={toggleMode}>
                    <Brightness4Icon color="inherit" fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>

        <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={()=>setSnackbarOpen(false)} anchorOrigin={{vertical : "top", horizontal : "right"}}>
            <MuiAlert onClose={()=> setSnackbarOpen(false)} variant='filled' severity='success' sx={{width: '100%'}}>
                Logout Succesfully...!
            </MuiAlert>
        </Snackbar>
    </MotionBox>
  )
}

export default UserNavbar
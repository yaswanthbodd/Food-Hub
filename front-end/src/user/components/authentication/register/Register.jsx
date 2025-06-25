import { Box, Button, Checkbox, Dialog, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { register } from '../authService/AuthService';
import MuiAlert from '@mui/material/Alert';


const Register = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [genderValue, setGenderValue] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    //Create registerData form
    const [registerData, setRegisterData] = useState({
        username: '',
        email : '',
        password : '',
        gender : '',
        role : 'USER'
    });

    // Handle the register Data onChange
    const handleChange = (e) => {
        const {name , value} = e.target
        setRegisterData(prev => ({
            ...prev,
            [name] : value,
        })
        )
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            await register(registerData.username, registerData.email, registerData.password, registerData.gender, registerData.role)
            setSnackbarOpen(true);
            console.log(registerData);
            navigate('/login');
        }
        catch(err) {
            console.log("Username already exits");
        }
        

        setRegisterData({
            username:'',
            email : '',
            password : '',
            gender : '',
            role : '',
        })
    }

    return (
        <Box>
            {/* <Button onClick={()=>setIsOpen(true)}>Submit</Button> */}
            <Dialog open={true}>
                <Box width={'400px'} height={'470px'}>
                    <Box margin={6}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Typography variant='h5' fontWeight={700}>Sign Up</Typography>
                            <IconButton size='small' onClick={()=>( navigate('/'))}>
                                <ClearIcon />
                            </IconButton>
                        </Stack>
                        <Box component={'form'} onSubmit={handleSubmit} marginTop={2} display={'flex'} flexDirection={'column'} gap={3}>
                            <TextField required size='small' value={registerData.username} onChange={handleChange} label='Username' name='username' type='text' fullWidth/>
                            <TextField required color='secondary' size='small' value={registerData.email} onChange={handleChange} label='Email' name='email' type='email' fullWidth/>
                            <TextField required size='small' label='Password' value={registerData.password} onChange={handleChange} name='password' type='password' fullWidth/>
                            <FormControl required>
                                <FormLabel id='gender'>Gender</FormLabel>
                                <RadioGroup sx={{ display : 'flex', flexDirection : 'row'}} name='gender' value={registerData.gender} onChange={handleChange}>
                                    <FormControlLabel control={<Radio />} value='Male' label='Male'/>
                                    <FormControlLabel control={<Radio />} value='Female' label='Female'/>
                                </RadioGroup>
                            </FormControl>
                            <Button type='submit' variant='contained' color='success'>Login</Button>    
                        </Box>
                        <Box marginTop={2} display={'flex'}>
                            <Typography  variant='body2' marginTop={1}>Already have an account ?</Typography>
                            <Button color='success' component={Link} to="/login">Login here</Button>
                        </Box>
                    </Box>
                </Box>
            </Dialog>

            <Snackbar
                                open={snackbarOpen}
                                autoHideDuration={2000}
                                onClose={() => setSnackbarOpen(false)}
                                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                >
                                <MuiAlert onClose={() => setSnackbarOpen(false)} variant="filled" severity="success" sx={{ width: '100%' }}>
                                    Uploaded Successfully
                                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default Register
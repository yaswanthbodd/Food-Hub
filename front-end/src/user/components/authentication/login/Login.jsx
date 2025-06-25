import { Box, Button, Checkbox, Chip, Dialog, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Snackbar, Stack, Switch, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from '../authService/AuthService';
import MuiAlert from '@mui/material/Alert';

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [check, setCheck] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();
    
        //Create registerData form
        const [loginData, setLoginData] = useState({
            email : '',
            password : '',
        });
    
        // Handle the register Data onChange
        const handleChange = (e) => {
            const {name , value} = e.target
            setLoginData(prev => ({
                ...prev,
                [name] : value,
            })
            )
        }
    
        const handleSubmit=async (e)=>{
            e.preventDefault();
            try{
                const result = await login(loginData.email,loginData.password)
                if(result.success){
                    setSnackbarOpen(true);
                    if(result.roleValue === "ADMIN"){
                        console.log("Hello")
                        navigate("/admin")
                    }else{
                        navigate("/");
                    }
                }else{
                    alert(result.message || "Invalid Message");
                }
                
            }catch(err){
                alert("Invalid Creditials")
            }
    
            setLoginData({
                email : '',
                password : '',
            })
            setCheck(false)
        }

    return (
        <Box>
            {/* <Button onClick={()=>setIsOpen(true)}>Click</Button> */}
            <Dialog open={true}>
                <Box width={'400px'} height={'400px'}>
                    <Box margin={6}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Typography variant='h5' fontWeight={700}>Login</Typography>
                            <IconButton size='small' onClick={()=>(navigate("/"))}>
                                <ClearIcon />
                            </IconButton>
                        </Stack>
                        <Box component={'form'} onSubmit={handleSubmit} marginTop={2} display={'flex'} flexDirection={'column'} gap={3}>
                            <TextField required color='secondary' size='small' value={loginData.email} onChange={handleChange} label='Email' name='email' type='email' fullWidth/>
                            <TextField required size='small' label='Password' value={loginData.password} onChange={handleChange} name='password' type='password' fullWidth/>
                            {/* <FormControlLabel  label='admin' control={<Switch name='role' checked={check} 
                            onChange={(e=>{
                                const isAdmin = e.target.checked;
                                setCheck(isAdmin);
                                setLoginData(prev => ({
                                    ...prev,
                                    role : isAdmin ? 'ADMIN' : 'USER'
                                }))
                            })}
                            value={ check ? 'ADMIN' : loginData.role}/>} /> */}
                            <Button type='submit' variant='contained' color='success'>Login</Button>    
                        </Box>
                        <Box marginTop={2} display={'flex'}>
                            <Typography  variant='body2' marginTop={1}>Create a new account ?</Typography>
                            <Button color='success' component={Link} to="/register">Click here</Button>
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
                    Login Successfully
                </MuiAlert>
            </Snackbar>
        </Box>
    )
}

export default Login
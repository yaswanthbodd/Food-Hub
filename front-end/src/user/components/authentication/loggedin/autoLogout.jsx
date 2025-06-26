import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from './Auth';

const autoLogout = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token) return

        try{
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if(decoded.exp < currentTime) {
                logout();
                navigate("/");
            }
        }
        catch(err){
            console.log(err);
            logout();
            navigate("/");
        }
    },[])
}

export default autoLogout;
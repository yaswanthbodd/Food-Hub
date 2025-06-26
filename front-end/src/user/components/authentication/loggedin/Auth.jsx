import { jwtDecode } from 'jwt-decode';

export const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    if(!token) return false;

    try{
        const {exp} = jwtDecode(token);
        if(Date.now() >= exp * 1000) {
            localStorage.removeItem("token");
            return false;
        }
        return true;
    }catch(e){
        return false;
    }
}

export const getUserInfo = () => {
    const token = localStorage.getItem("token");
    if(!token) return null;

    try{
        return jwtDecode(token);
    }catch(e) {
        return null;
    }
}

export const logout = ()=> {
    localStorage.clear();
}


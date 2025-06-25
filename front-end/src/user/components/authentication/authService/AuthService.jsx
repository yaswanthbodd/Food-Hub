import axios from "axios"
const API_URL = 'http://localhost:8080/api/auth/';

//User Register function
export const register = (username, email, password, gender, role) => {
    axios.post(API_URL + "register", { username, email, password, gender, role})
    .then((response)=>{
        console.log("Successfull")
        console.log(response.data);
    })
    .catch((error)=>{
        console.log('Error ',error);
    })
}

export const login = async(email, password) => {

    try{
        const response = await axios.post(API_URL + "login", {email, password})
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("role",response.data.role);
        console.log("Login Successfull");
        const roleValue = response.data.role
        return { success: true, roleValue};
    }
    catch (error) {
        console.error("Login failed:", error.response?.data?.message || error.message);
        return { success: false, message: error.response?.data?.message || "Login failed" };
    }
}

export const logout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
}

export const getToken = () => localStorage.getItem("token");

export const authHeader = () => {
    const token = getToken();
    return token ? { Autherization : `Bearer ${token}`} : {} ;
}

export const AuthService = () => {
    return (
        <div>AuthService</div>
    )
}

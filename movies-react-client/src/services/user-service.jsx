// import http from './http-service';
import axios from "axios";
import jwtDecode from "jwt-decode";

const apiUrl = "http://localhost:4000";

export function register(user){
    return axios.post(`${apiUrl}/users/register`, user);
}

export async function login(user){
    try{
        const response = await axios.post(`${apiUrl}/users/authenticate`, user);
        localStorage.setItem('accessToken', response.data.token);
        return Promise.resolve(response);
    }catch(error){
        return Promise.reject(error);
    }
}

export function getCurrentUser(){
    try{
        const accessToken = localStorage.getItem('accessToken');
        console.log(jwtDecode(accessToken));
        return jwtDecode(accessToken);
    }catch(error){
        return null;
    }
}
 

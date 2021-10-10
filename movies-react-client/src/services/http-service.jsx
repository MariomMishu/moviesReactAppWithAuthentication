import axios from "axios";

axios.interceptors.response.use(null, error=>{
    const expected_error = 
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

    if(!expected_error){
        console.log("logging the error", error);
        alert("An unexpected error occured. Please try again later.");
    }else if(error.response.status === 400){
        alert("Bad Request");
    }else if(error.response.status === 404){
        alert("Item not found or previously deleted.");
    }
    return Promise.reject(error);
});

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default http;
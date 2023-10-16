
import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getAllUsers = () => {
    return axios({
        method: "GET",
        withCredentials: true,
        url: `${SERVER_URL}/api/Users`,
    }).catch((error) => {
        console.log("In axios", error);
        throw error;
    });
};

export const signUpUser = ( formData) => {
    return axios({
        method: "POST",
        data: formData,
        withCredentials: true,
        // headers: { "x-auth-token": token },
        url: `${SERVER_URL}/api/Users`,
    }).catch((error) => {
        console.log("In axios", error.response);
        throw error;
    });
}

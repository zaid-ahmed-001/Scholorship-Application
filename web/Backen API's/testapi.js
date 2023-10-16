
import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getBusinessesByCategory = (categoryId) => {
    return axios({
        method: "GET",
        withCredentials: true,
        url: `${SERVER_URL}/api/categories/${categoryId}/businesses`,
    }).catch((error) => {
        console.log("In axios", error.response);
        throw error;
    });
};

export const getBusinessesBySortingFilter = (token, formData) => {
    return axios({
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: { "x-auth-token": token },
        url: `${SERVER_URL}/api/businesses/findNearestBusiness?categoryId=${formData.categoryId}`,
    }).catch((error) => {
        console.log("In axios", error.response);
        throw error;
    });
}

import axios from "axios";

const baseUrl = "http://localhost:8080"

export function baseAxios(){
    return  axios.create({
        baseURL: baseUrl,
    });
}

export function tokenAxios() {
    return  axios.create({
        baseURL: baseUrl,
        headers : {
            "Authorization" : `Bearer ${sessionStorage.getItem("access-token")}`
        }
    });
}

export const healthCheck = async () => {
    return await baseAxios().get(`/healthCheck`)
}
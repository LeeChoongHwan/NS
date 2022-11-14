import axios from "axios";

export default function baseAxios(){
    return  axios.create({
        baseURL: 'http://localhost:8080',
    });
}
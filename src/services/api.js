import axios from "axios";

export const api = axios.create({
    baseURL:"http://192.168.137.192:3333/",
})
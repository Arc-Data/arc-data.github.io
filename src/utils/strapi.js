import axios from "axios";

const API_URL = import.meta.env.VITE_STRAPI_URL
const API_TOKEN = import.meta.env.VITE_STRAPI_TOKEN

const strapi = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
})

export default strapi
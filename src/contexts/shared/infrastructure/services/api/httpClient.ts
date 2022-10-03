import axios from "axios";

export const httpClient = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default httpClient;
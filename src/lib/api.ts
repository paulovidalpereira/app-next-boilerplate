import axios from 'axios';
import { getCookie } from 'cookies-next';

const apiSetup = () => {
    const api = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    api.interceptors.request.use(async (config) => {
        const token = getCookie('token');

        config.headers['Authorization'] = `Bearer ${token}`;

        return config;
    });

    return api;
};

export const api = apiSetup();

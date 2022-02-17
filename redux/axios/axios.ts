import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

instance.interceptors.request.use((config) => {
    console.log("config", config);
    if (config.url?.includes("/admin/") || config.url?.includes("/attachment")) {
        config.headers = {
            ...config.headers,
            'x-auth-token': localStorage.getItem("accessToken") || ""
        }
        return config;
    } else {
        return config;
    }
})

export default instance;
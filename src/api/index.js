import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    //http://to-do-list-api-dev.us-east-2.elasticbeanstalk.com/

    headers: {
        "Content-Type": "application/json",
    },
});
export let privateApi;

export const setupPrivateApi = (token) => {
    privateApi = axios.create({
        baseURL:  import.meta.env.VITE_API_URL,
        
        //http://to-do-list-api-dev.us-east-2.elasticbeanstalk.com/
        //http://localhost:3333

        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
};

/* api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}); */

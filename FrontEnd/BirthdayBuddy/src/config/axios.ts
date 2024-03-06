import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    baseURL: "http://localhost:8080/api"
}

const api = axios.create(config);

axios.interceptors.request.use(function (config) {
    //Do something before the request is sent
    return config;
}, null);

export default api;
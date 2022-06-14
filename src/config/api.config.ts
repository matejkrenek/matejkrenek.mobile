import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Config } from "types/config.type";

export const config: Config.Api = {
    url: "https://api.matejkrenek.cz",
    version: 'v1'
}

const instance: AxiosInstance = axios.create({
    baseURL: `${config.url}/${config.version}`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

instance.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error: AxiosError) => {
    Promise.reject(error)
});

export const api = instance;


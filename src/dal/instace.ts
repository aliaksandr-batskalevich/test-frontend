import axios from 'axios';

const baseURL = 'http://34.132.118.27:8080';

const axiosOptions = {
    baseURL,
};

export const instance = axios.create(axiosOptions);
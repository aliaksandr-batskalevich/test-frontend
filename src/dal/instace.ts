import axios from 'axios';

const baseURL = 'http://34.132.118.27';

const axiosOptions = {
    baseURL,
};

export const instance = axios.create(axiosOptions);
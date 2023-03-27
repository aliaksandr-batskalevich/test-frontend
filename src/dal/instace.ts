import axios from 'axios';

const baseURL = 'http://35.239.107.150/';

const axiosOptions = {
    baseURL,
};

export const instance = axios.create(axiosOptions);
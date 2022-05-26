import {API_URL, LOGIN_OBJ_KEY} from '../GLOBALS';
import * as axiosUtil from './axiosUtil';
import axios from 'axios';


export const doLogin = async (username, password) => {
    try {
        const url = `${API_URL}/user/login`;
        const data = await axiosUtil.postApi(url, {username, password});
        if(data.jwt) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.jwt}`;
            localStorage.setItem(LOGIN_OBJ_KEY, JSON.stringify(data));
        }
        return data;
    } catch (e) {
        console.log(e);
        return { message: 'Network Error' };
    }   
};

export const registerUser = async (user) => {
    const url = `${API_URL}/user/register`;
    const data = await axiosUtil.postApi(url, user);
    return data;
};

export const deleteUser = async (user) => {
    const url = `${API_URL}/user/deleteUser`;
    const data = await axiosUtil.postApi(url, user);
    return data;
};

export const validateJwt = async (jwt) => {
    try {
    const url = `${API_URL}/user/validateJwt?jwt=${jwt}`;
    const data = await axiosUtil.getApi(url); // this actually returns true/false directly
    if (data) axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    return data;
    } catch (e) {
        console.log('jwt validation failed');
        return false;
    }
};


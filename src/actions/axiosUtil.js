import axios from 'axios';

export const postApi = async (url, body) => {
    const response = await fetch(url, { method: "POST", headers: { 'Content-Type': "application/json", "Authorization": axios.defaults.headers.common['Authorization'] }, body: JSON.stringify(body) });
    let data = response;
    try {
        data = await response.json();
    } catch (e) {
        console.log("post request could not be cast to json")
    }
    return data;
};

export const getApi = async (url) => {
    const response = await fetch(url, { method: "GET", headers: { 'Content-Type': "application/json", "Authorization": axios.defaults.headers.common['Authorization'] } });
    let data = response;
    try {
        data = await response.json();
    } catch (e) {
        console.log("get request could not be cast to json")
    }
    return data;
};

export const deleteApi = async (url) => {
    const response = await fetch(url, { method: "DELETE", headers: { 'Content-Type': "application/json", "Authorization": axios.defaults.headers.common['Authorization'] } });
    let data = response;
    try {
        data = await response.json();
    } catch (e) {
        console.log("delete request could not be cast to json")
    }
    return data;
};

export const deleteWithBodyApi = async (url, body) => {
    const response = await fetch(url, { method: "DELETE", headers: { 'Content-Type': "application/json", "Authorization": axios.defaults.headers.common['Authorization'] }, body: JSON.stringify(body) });
    let data = response;
    try {
        data = await response.json();
    } catch (e) {
        console.log("delete request could not be cast to json")
    }
    return data;
};

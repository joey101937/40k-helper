import { API_URL } from '../GLOBALS';
import * as axiosUtil from './axiosUtil';

export const upsertRoster = async (roster) => {
    const url = `${API_URL}/roster/save`;
    const data = await axiosUtil.postApi(url, roster);
    return data;
};

export const deleteExperienceStateById = async (id) => {
    const url = `${API_URL}/roster/delete?id=${id}`;
    const data = await axiosUtil.getApi(url);
    return data;
};

export const getMyRosters = async () => {
    const url = `${API_URL}/roster/getMyRosters`;
    const data = await axiosUtil.getApi(url);
    if(data.length) {
        data.forEach(x => {
            x.content = JSON.parse(x.content);
            x.metadata = JSON.parse(x.metadata);
        })
    }
    return data;
};



import API from '@/constants/api';
import { getErrorMessage } from '@/utils/axios.error';
import { AxiosError } from 'axios';
import AxiosInstance from './http.instance';

interface IBlog {

}

const create = (body: IBlog) => {
    return new Promise<{ msg: string; address: IBlog }>(async (resolve, reject) => {
        try {
            let res: any = await AxiosInstance.post(API.blog, body);
            resolve(res);
        } catch (error) {
            const errorMessage = getErrorMessage(error as AxiosError);
            reject(errorMessage);
        }
    });
};

const update = (_id: string, body: IBlog) => {
    return new Promise<{ msg: string; address: IBlog }>(async (resolve, reject) => {
        try {
            let res: any = await AxiosInstance.put(API.blog + "/" + _id, body);
            resolve(res);
        } catch (error) {
            const errorMessage = getErrorMessage(error as AxiosError);
            reject(errorMessage);
        }
    });
};

const get = (_id?: string | null, query?: any) => {
    return new Promise<{ blogs?: IBlog[]; blog?: IBlog }>(async (resolve, reject) => {
        try {
            let res: any = await AxiosInstance.get(`${API.blog}${_id != null ? "/" + _id : ""}`, {
                params: query
            });
            resolve(res);
        } catch (error) {
            const errorMessage = getErrorMessage(error as AxiosError);
            reject(errorMessage);
        }
    });
};

const remove = (_id: string) => {
    return new Promise<{ msg: string }>(async (resolve, reject) => {
        try {
            let res: any = await AxiosInstance.delete(`${API.blog}${_id ? "/" + _id : ""}`);
            resolve(res);
        } catch (error) {
            const errorMessage = getErrorMessage(error as AxiosError);
            reject(errorMessage);
        }
    });
};

export const BlogAPI = { create, get, remove, update };
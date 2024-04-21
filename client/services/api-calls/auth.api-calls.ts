import { getErrorMessage } from "@/utils/axios.error";
import { AxiosError } from "axios";
import AxiosInstance from "./http.instance";
import API from '@/constants/api';


const login = (body: { email: string, password: string }) => {
    return new Promise<{ msg: string, token: string, user: any }>(async (resolve, reject) => {
        try {
            let res: any = await AxiosInstance.post(API.login, body);
            resolve(res);
        } catch (error) {
            const errorMessage = getErrorMessage(error as AxiosError);
            reject(errorMessage);
        }
    });
};


const AuthAPI = { login }

export default AuthAPI
import axios from 'axios';
import { User, UserResponse, UserSubmit } from './model';

export const conduitApi = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
});

export function setJWT(jwt: string) {
    conduitApi.defaults.headers.common.Authorization = 'Token ${jwt}';
}

export function clearJWT() {
    delete  conduitApi.defaults.headers.common.Authorization;
}

export async function loginUser(user: UserSubmit): Promise <User|undefined> {
    try {
        const response = await conduitApi.post('/users/login', {
            user,
        });
        return (response.data as UserResponse).user;
    } catch (e) {
        // tslint:disable-next-line: no-console
        console.error(e);
    }
}



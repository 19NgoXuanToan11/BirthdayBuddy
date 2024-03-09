import axios from 'axios';
import { app } from './proxyServer'

export const loginAPI = async ({
    username, password,
}: {
    username: string | null;
    password: string | null;
}): Promise<any> => {
    try {
        const res = await axios.post(`http://localhost:8080/api/users/login`, { username, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};

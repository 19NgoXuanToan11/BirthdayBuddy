import axios from 'axios';

interface LoginCredentials {
    username: string;
    password: string;
}

const loginApi = async ({ username, password }: LoginCredentials) => {
    try {
        const res = await axios.post('http://localhost:8080/api/users/login', null, {
            params: {
                username,
                password
            }
        });
        return res.data; // Assuming the response data contains the user information
    } catch (error) {
        console.error('Login failed:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};


interface RegistrationData {
    userName: string;
    password: string;
    fullName: string;
    email: string;
    phone: string;
    roleId: number;
}

const registerApi = async (data: RegistrationData): Promise<any> => {
    try {
        const res = await axios.post('http://localhost:8080/api/users/register', data);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error('Registration failed:', error.response.data);
        throw error;
    }
};
export const authAPI = { loginApi, registerApi };
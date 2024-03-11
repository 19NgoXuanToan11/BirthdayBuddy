import axios from 'axios';

interface LoginCredentials {
    username: string;
    password: string;
}

const loginApi = async ({ username, password }: LoginCredentials): Promise<boolean> => {
    try {
        const res = await axios.post('http://localhost:8080/api/users/login', null, {
            params: {
                username,
                password
            }
        });

        console.log(res);
        if (res.status === 200) {
            console.log('Login successful');
            return true;
        } else {
            console.log('Login failed');
            return false;
        }
    } catch (error) {
        console.error('Login failed:', error);
        return false;
    }
};


interface RegistrationData {
    username: string;
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
        return res.data; // Return the data from the response
    } catch (error) {
        console.error('Registration failed:', error.message);
        throw error; // Throw the error for handling in the caller function
    }
};
export const authAPI = { loginApi, registerApi };
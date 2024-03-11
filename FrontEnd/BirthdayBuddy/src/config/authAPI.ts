import axios from 'axios';
import { app } from './proxyServer'

const loginApi = async ({
    username,
    password,
  }: {
    username: string | null;
    password: string | null;
  }) => {
    
    const res: any = await axios
      .post(`http://localhost:8080/api/users/login`, { username, password })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(res);
    return res?.data;
  };
  
  
  const registerApi = async (data:any) => {
      const res: any = await axios
        .post(`http://localhost:8080/api/users/register`, data)
        .catch((err) => {
          console.log(err.message);
        });
      console.log(res);
      return res?.data;
    };
  export const authAPI = { loginApi, registerApi };
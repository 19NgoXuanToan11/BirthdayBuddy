import axios from "axios";
import { toast } from "react-toastify";

const loginAPI = async ({
    username, password,
}: {
    username: string | null;
    password: string | null;
}) => {
    const res: any = await axios.post(`http://localhost:8080/api/users/login`, { username, password })
        .catch((err) => {
            console.log(err);
            toast("Login failed", { type: toast.TYPE.ERROR })
        });
        console.log(res);
        return res?.data;

};

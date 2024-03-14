import axios from "axios";
import { toast } from "react-toastify";

const getAllUsers = async () => {
    const res = await axios.get(`http://localhost:8080/api/users/all`);
    console.log(res);
    return res?.data;
};

const getAllParties = async () => {
    const res = await axios.get(`http://localhost:8080/api/parties/all`);

    return res?.data;
};

const getAllRestaurants = async () => {
    const res = await axios.get(`http://localhost:8080/api/restaurants/all`);

    return res?.data;
};

const getUserById = async (userId: number) => {
    const res = await axios.get(`http://localhost:8080/api/users/${userId}`);
    return res?.data;
};

const updateUserInformation = async (userId: any, data: any) => {
    const res = await axios.put(
        `http://localhost:8080/api/users/update/${userId}`,
        data
    );
    console.log(res);
    return res?.data;
};

const addParty = async (data: any) => {
    const res: any = await axios
        .post(`http://localhost:8080/api/parties/create`, data)
        .catch((err) => console.log(err));
    console.log(res);
    return res?.data;
};

const editParty = async (id: string, data: any) => {
    const res: any = await axios
        .put(`http://localhost:8088/public/course/edit/${id}`, data)
        .catch((err) => console.log(err));
    console.log(res);
    return res?.data;
};

const getAllRestaurantType = async () => {
    const res = await axios.get(`localhost:8080/api/restaurantTypes/all`);

    return res?.data;
}


export const API = {
    getAllUsers,
    getAllParties,
    getAllRestaurants,
    getUserById,
    addParty,
    getAllRestaurantType
};

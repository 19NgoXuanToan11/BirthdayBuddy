import axios from "axios";
import { toast } from "react-toastify";

const getAllUsers = async () => {
    const res = await axios.get(`http://localhost:8080/api/users/all`);
    console.log(res);
    return res?.data;
};

const getAllParties = async () => {
    const res = await axios.get(
        `http://localhost:8080/api/parties/all`
    );

    return res?.data;
};

const getAllRestaurants = async () => {
    const res = await axios.get(
        `http://localhost:8080/api/restaurants/all`
    );

    return res?.data;
};

const getUserById = async (userId: bigint) => {
    const res = await axios.get(
        `http://localhost:8080/api/users/${userId}`
    );
    return res?.data;
};

// const payment = async (data: any) => {
//   const res = await axios.post(
//     `http://localhost:8088/public/orders/payment`,
//     data
//   );
//   return res?.data;
// };

const updateUserInformation = async (userId: any, data: any) => {
    const res = await axios.put(`http://localhost:8080/api/users/update/${userId}`, data);
    console.log(res);
    return res?.data;
};

// const getOrderHistory = async (userid: string) => {
//   const res = await axios.get(
//     `http://localhost:8088/public/user/orders/${userid}`
//   );
//   console.log(res);
//   return res?.data;
// };

// const getCourseCategories = async () => {
//   const res = await axios.get(
//     `http://localhost:8088/public/courseCategory/ViewAllDrawingCategories`
//   );
//   console.log(res);
//   return res?.data;
// };

// const getCourseLevel = async () => {
//   const res = await axios.get(
//     `http://localhost:8088/public/level/ViewAllLevels`
//   );
//   console.log(res);
//   return res?.data;
// };

// const getCourseByCategory = async (categoryId: number) => {
//   const res = await axios.get(
//     `http://localhost:8088/public/course/find?category=${categoryId}`
//   );
//   console.log(res);
//   return res?.data;
// };

// const getTrueCourseByCategory = async (categoryId: number) => {
//   const res = await axios.get(
//     `http://localhost:8088/public/course/course-status-1/by-cateid/${categoryId}`
//   );
//   console.log(res);
//   return res?.data;
// };

// const getTrueCourseByLevel = async (levelid: number) => {
//   const res = await axios.get(
//     `http://localhost:8088/public/course/course-status-1/by-levelid/${levelid}`
//   );
//   console.log(res);
//   return res?.data;
// };

// const changePassword = async (data: any) => {
//   const res = await axios.post(
//     `http://localhost:8088/public/account/change-password`,
//     data
//   );
//   console.log(res);
//   return res?.data;
// };

const addParty = async (data: any) => {
    const res: any = await axios
        .post(`http://localhost:8088/public/course/addCourse`, data)
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

// const setTrueCourse = async (id: string) => {
//   const res: any = await axios
//     .put(`http://localhost:8088/public/course/update-status/${id}`)
//     .catch((err) => {
//       console.log(err);
//       toast("Không thành công", { type: toast.TYPE.ERROR });
//     });
//     toast("Đã duyệt khoá học", {
//       type: toast.TYPE.SUCCESS,
//     });
//   return res?.data;
// };

// const getAllFeedBack = async () => {
//   const res = await axios.get(
//     `http://localhost:8088/public/review/find-All-FeedBacks`
//   );
//   console.log(res);
//   return res?.data;
// };

// const toggleParty = async (id: string) => {
//   const res = await axios.put(
//     `http://localhost:8088/public/course/${id}/toggle-status`
//   );
//   toast("Đã thu hồi khoá học", {
//     type: toast.TYPE.SUCCESS,
//   });
//   return res?.data;
// };



export const API = {
    getAllUsers,
    getAllParties,
    getAllRestaurants,
    getUserById,
};
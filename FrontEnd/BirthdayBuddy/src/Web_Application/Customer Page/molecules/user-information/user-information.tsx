import "./user-information.scss";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../../../../src/config/API";
import { toast } from "react-toastify";

export default function UserInformation() {
//   const [loggedInUser, setLoggedInUser] = useState<any>([]);

//   console.log(loggedInUser);

//   useEffect(() => {
//     const fetchLoggedInUser = async () => {
//       try {
//         const user = localStorage.getItem("loggedInUser");
//         if (user) {
//           const userData = JSON.parse(user);
//           const userById = await API.getUserById(userData.id);
//           setLoggedInUser(userById);
//         } else {
//           toast.error("User information not found. Please login again.");
//         }
//       } catch (error) {
//         console.error("Error fetching user:", error);
//         toast.error("Error fetching user information.");
//       }
//     };

//     fetchLoggedInUser();
//   }, []);

  return (
    <>
      <div className="user-body">
        <div className="user-body-container-left">
          <div className="user-thong-tin">
            <div className="user-title">TÀI KHOẢN CÁ NHÂN</div>
            <div className="userPic">
              <img src="/src/SWP_RESOURCE/pictures/pinata.jpg" alt=""></img>
            </div>
            <div className="userLogout">
              <img src="/src/SWP_RESOURCE/icon/logout.png" alt=""></img>
            </div>
            <div className="logout">
              <Link to={"/"}>
                <button type="submit">Đăng xuất</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="user-body-container-right">
          <div className="user-table">
            <div className="user-table-top">
              <div className="user-name">THÔNG TIN KHÁCH HÀNG</div>
            </div>

            <div className="user-table-middle">
              <div className="thong-tin-chung">
                <div className="thong-tin">
                  Thông tin chung
                  <div className="middle-left">
                    <span>Họ tên</span>
                    <span>Giới tính</span>
                    <span>Ngày sinh</span>
                    <span>Số CMND</span>
                    <div className="user-info">
                      {/* <span>{loggedInUser.userName}</span> */}
                      <span>NULL</span>
                      {/* <span>{loggedInUser.gender === "1" ? "Nam" : "Nữ"}</span> */}
                      <span>NULL</span>
                      {/* <span>{loggedInUser.dob}</span> */}
                      <span>NULL</span>
                      {/* <span>{loggedInUser.idCard}</span> */}
                    </div>
                  </div>
                </div>
                <div className="middle-right">
                  <span>Điện thoại</span>
                  <span>Email</span>
                  <span>Địa chỉ</span>
                  <div className="info">
                    {/* <span>{loggedInUser.phone}</span>
                    <span>{loggedInUser.email}</span> */}
                    <span>NULL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="user-table-bottom">
              <div className="mua-hang-chung">
                <div className="mua-hang">Thông tin đặt tiệc</div>
                <div className="xem-button">
                  <Link to={"/customer/booking-success"}>
                    <button type="submit">Xem thông tin đặt tiệc</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

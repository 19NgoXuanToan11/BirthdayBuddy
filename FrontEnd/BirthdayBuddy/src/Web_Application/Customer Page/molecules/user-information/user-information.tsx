import "./user-information.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function UserInformation() {
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
                      <span>Nguyễn Văn A</span>
                      <span>Nam</span>
                      <span>11/03/2003</span>
                      <span>027203001</span>
                    </div>
                  </div>
                </div>
                <div className="middle-right">
                  <span>Điện thoại</span>
                  <span>Email</span>
                  <span>Địa chỉ</span>
                  <div className="info">
                    <span>0987654321</span>
                    <span>nguyenvana@gmail.com</span>
                    <span>Quận 5, TPHCM</span>
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

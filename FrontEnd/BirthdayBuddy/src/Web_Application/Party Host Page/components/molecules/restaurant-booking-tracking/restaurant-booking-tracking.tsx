import React from "react";
import { Link } from "react-router-dom";
import "./restaurant-booking-tracking.scss";

export default function RestaurantBookingTracking() {
    return (
        <>
            <header className="guest-header">
                <div className="middle-header">
                    <div className="logo">
                        <Link to="/">
                            <img src="/src/SWP_RESOURCE/Logo.png" alt="Logo" />
                        </Link>
                    </div>

                    <div className="search-bar">
                        <input type="text" placeholder="Tìm kiếm..." />
                    </div>
                    <div className="cus-cart">
                        <Link to={""}>
                            <div className="user-icon">
                                <i className="fa fa-user">
                                    <img src="/src/SWP_RESOURCE/icon/alone.gif" />
                                </i>
                            </div>
                            <div className="dropdown">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn m-1"
                                >
                                    Nguyễn Văn A
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a>Tài khoản của tôi</a>
                                    </li>
                                    <Link to="/host/list-party">
                                        <li>
                                            <a>Danh sách bữa tiệc</a>
                                        </li>
                                    </Link>
                                    <Link to="/host/create-party">
                                        <li>
                                            <a>Tạo bữa tiệc</a>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </Link>
                        <Link to="/customer/notification">
                            <i className="fa fa-shopping-cart">
                                <img src="/src/SWP_RESOURCE/icon/notification-bell.gif" />
                            </i>
                        </Link>
                    </div>
                </div>
            </header>

            <h2 className="title-information">THÔNG TIN CHI TIẾT</h2>

            <div className="container">
                <div className="box-1">
                    <div className="status">
                        <div className="status0">Tên nhà hàng: Hello</div>
                        <div className="status123">Tình trạng: Đang xử lí</div>
                    </div>
                    <div className="event">
                        <h6>Mã tiệc: H001</h6>
                        <h6>Thời gian tổ chức: 8:30 20/02/2024</h6>
                        <h6>Ngày đặt: 15/02/2024 8:05:12</h6>
                    </div>

                    <div className="content">
                        <h6>Họ và tên phụ huynh: Nguyễn Văn A</h6>
                        <h6>Số điện thoại: 0786485999</h6>
                        <h6>Họ và tên bé: Nguyễn Văn AA</h6>
                        <h6>Tuổi: 5 tuổi</h6>
                        <h6>Giới tính: Nam</h6>
                        <h6>Chủ đề trang trí: Bãi biển</h6>
                        <h6>Dịch vụ đặc biệt: Đập kẹo Pinata</h6>
                        <h6>Menu: Món ăn nhanh</h6>
                        <h6>Số lượng người tham dự: 15 người</h6>
                        <h6>Ghi chú: Không có</h6>
                        <h6>Tổng thanh toán: 5.200.000</h6>
                        <h6>
                            Phương thức thanh toán: Thanh toán online bằng momo
                        </h6>
                        <h6>Tình trạng thanh toán: Đã thanh toán</h6>
                    </div>
                </div>

                <Link to="/host/restaurant-booking-tracking/restaurant-booking-success">
                    <button className="accept-button">Duyệt</button>
                </Link>
                <Link to="/host/create-party/create-party-theme/create-special-service/create-food-menu">
                    <button className="cancel-button">Hủy</button>
                </Link>
            </div>

            <div className="guest-footer-high-page">
                <ul className="call-us">
                    <li>Gọi chúng tôi</li>
                    <li>
                        <img src="/src/SWP_RESOURCE/icon/phone.gif" />
                        1900 43 22 31
                    </li>
                </ul>

                <ul className="mail-us">
                    <li>Gửi tin nhắn cho chúng tôi</li>
                    <li>
                        <img src="/src/SWP_RESOURCE/icon/message.gif" />
                        birthdaybuddy@gmail.com
                    </li>
                </ul>

                <ul className="follow-us">
                    <li>Theo dõi chúng tôi</li>
                    <div className="icon">
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/facebook (1).png" />
                        </li>
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/twitter.png" />
                        </li>
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/instagram.png" />
                        </li>
                    </div>
                </ul>
            </div>

            <div className="guest-footer-middle-page">
                <img className="footer-logo" src="/src/SWP_RESOURCE/Logo.png" />

                <ul className="footer-nav-link">
                    <li>
                        <a href="#!">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#!">Các gói tiệc</a>
                    </li>
                    <li>
                        <a href="#!">Dịch vụ đặc biệt</a>
                    </li>
                </ul>
            </div>

            <div className="guest-footer-low-page">
                <p>
                    Lô T2, đường D1, khu Công Nghệ Cao, thành phố Thủ Đức, thành
                    phố Hồ Chí Minh
                </p>
            </div>
        </>
    );
}

import React from "react";
import { Link } from "react-router-dom";
import "./create-party-theme.scss";

export default function CreatePartyTheme() {
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
                        <Link to={"/host/create-party"}>
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
                                    <li>
                                        <a>Danh sách bữa tiệc</a>
                                    </li>
                                    <li>
                                        <a>Tạo bữa tiệc</a>
                                    </li>
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

            <div className="main">
                <h1>TẠO CHỦ ĐỀ BỮA TIỆC</h1>
                <div className="content-theme">
                    <input type="text" placeholder="ID" className="input" />
                    <input
                        type="text"
                        placeholder="Thêm chủ đề bữa tiệc"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Thành phần"
                        className="input"
                    />
                    <input type="text" placeholder="Mô tả" className="input" />
                    <input
                        type="text"
                        placeholder="Giá tiền"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Người tạo"
                        className="input"
                    />
                    <input
                        type="text"
                        placeholder="Ghi chú"
                        className="input"
                    />
                </div>
                <div className="theme-buttons">
                    <Link to="/host/create-party/create-party-theme/create-special-service">
                        <button className="create-button">Tạo</button>
                    </Link>
                    <Link to="/host/create-party">
                        <button className="cancel-button">Hủy</button>
                    </Link>
                </div>
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

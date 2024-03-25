import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../../../src/config/axios";

function CustomerHeader() {
    const location = useLocation();
    const loggedInUser = location.state?.loggedInUser;
    return (
        <header className="guest-header">
            <div className="middle-header">
                <div className="logo">
                    <Link to={`/customer/${loggedInUser?.id}`}>
                        <img src="/src/SWP_RESOURCE/Logo.png" alt="Logo" />
                    </Link>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <div className="cus-cart">
                    {loggedInUser ? (
                        <Link to={`/customer/information`}>
                            <div className="user-icon">
                                <img
                                    src="/src/SWP_RESOURCE/icon/alone.gif"
                                    alt="User Icon"
                                />
                            </div>
                            <div className="user-name">
                                {loggedInUser.userName}
                            </div>
                        </Link>
                    ) : (
                        <div>Please wait...</div>
                    )}
                    <Link to="/customer/notification">
                        <img
                            src="/src/SWP_RESOURCE/icon/notification-bell.gif"
                            alt="Notification Bell"
                        />
                    </Link>
                </div>
            </div>
            <nav className="lower-header">
                <ul>
                    <li>
                        <Link to="/customer/2">
                            <span>Trang chủ</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#">Các gói tiệc</a>
                    </li>
                    <li>
                        <Link to="/customer/booking-list">
                            <span>Giỏ hàng</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#">Về BirthdayBuddy</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default CustomerHeader;

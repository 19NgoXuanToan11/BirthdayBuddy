import { useEffect, useState } from "react";
import "./host-header.scss";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../../../../src/config/axios";

function HostHeader() {
    const location = useLocation();
    const loggedInUser = location.state?.loggedInUser;
    
    return (
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
                    <Link to={"/host/list-party"}>
                        <div className="user-icon">
                            <i className="fa fa-user">
                                {loggedInUser && loggedInUser.userName && (
                                    <span>{loggedInUser.userName}</span>
                                )}
                                <img src="/src/SWP_RESOURCE/icon/alone.gif" />
                            </i>
                        </div>
                        {loggedInUser && (
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn m-1">
                                    {loggedInUser.userName}
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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
                        )}
                    </Link>
                    <Link to="/customer/notification">
                        <i className="fa fa-shopping-cart">
                            <img src="/src/SWP_RESOURCE/icon/notification-bell.gif" />
                        </i>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default HostHeader;

import "./header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../../../../src/config/axios";

function CustomerHeader() {
    const [loggedInUser, setLoggedInUser] = useState<any>([]);

    useEffect(() => {
        const fetchLoggedInUser = async () => {
            try {
                const user = sessionStorage.getItem("loggedInUser");
                if (user) {
                    const userData = JSON.parse(user);
                    const userById = await api.get(userData.id);
                    setLoggedInUser(userById);
                } else {
                    toast.error(
                        "User information not found. Please login again."
                    );
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                toast.error("Error fetching user information.");
            }
        };

        fetchLoggedInUser();
    }, []);

    return (
        <header className="guest-header">
            <div className="middle-header">
                <div className="logo">
                    <Link to={`/customer/${loggedInUser.id}`}>
                        <img src="/src/SWP_RESOURCE/Logo.png" alt="Logo" />
                    </Link>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <div className="cus-cart">
                    {loggedInUser && (
                        <Link to={"/customer/information"}>
                            <div className="user-icon">
                                <i className="fa fa-user">
                                    <img
                                        src="/src/SWP_RESOURCE/icon/alone.gif"
                                        alt="User Icon"
                                    />
                                </i>
                            </div>
                            <div className="user-name">
                                {loggedInUser.userName}
                            </div>
                        </Link>
                    )}
                    <Link to="/customer/notification">
                        <i className="fa fa-shopping-cart">
                            <img
                                src="/src/SWP_RESOURCE/icon/notification-bell.gif"
                                alt="Notification Bell"
                            />
                        </i>
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

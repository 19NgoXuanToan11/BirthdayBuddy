import React from "react";
import { Link } from "react-router-dom";

export default function CreatePartyTheme() {
    return (
        <>
            <div className="main">
                <h1>TẠO CHỦ ĐỀ BỮA TIỆC</h1>
                <div className="content-theme">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                </div>
                <div className="theme-buttons">
                    <Link to="/host/create-party/create-party-theme/create-special-service">
                        <button className="btn btn-outline btn-warning">
                            Tạo
                        </button>
                    </Link>
                    <button className="btn btn-outline btn-warning">Hủy</button>
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

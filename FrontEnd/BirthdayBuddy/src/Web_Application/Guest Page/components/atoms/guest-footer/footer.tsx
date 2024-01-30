import "./footer.scss";

function GuestFooter() {
    return (
        <>
            <div className="guest-footer-high-page">
                <ul>
                    <li>Gọi chúng tôi</li>
                    <li>Gửi tin nhắn cho chúng tôi</li>
                    <li>Theo dõi chúng tôi</li>
                    <ul>
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/facebook (1).png" />
                        </li>
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/twitter.png" />
                        </li>
                        <li>
                            <img src="/src/SWP_RESOURCE/icon/instagram.png" />
                        </li>
                    </ul>
                </ul>

                <ul>
                    <li>
                        <img src="/src/SWP_RESOURCE/icon/phone.gif" />
                        1900 43 22 31
                    </li>
                    <li>
                        <img src="/src/SWP_RESOURCE/icon/message.gif" />
                        birthdaybuddy@gmail.com
                    </li>
                </ul>
            </div>

            <div className="guest-footer-middle-page">
                <img className="footer-logo" src="/src/SWP_RESOURCE/Logo.png" />

                <ul className="footer-nav-link">
                    <li>Trang chủ</li>
                    <li>Các gói tiệc</li>
                    <li>Dịch vụ đặc biệt</li>
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

export default GuestFooter;

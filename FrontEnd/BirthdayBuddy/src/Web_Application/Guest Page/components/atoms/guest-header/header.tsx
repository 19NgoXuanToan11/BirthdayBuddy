import "./header.scss";

function GuestHeader() {
    return (
        <header className="guest-header">
            <div className="middle-header">
                <div className="logo">
                    <img src="/src/SWP_RESOURCE/Logo.png" alt="Logo"/>
                </div>
                
                <div className="search-bar">
                    <input type="text" placeholder="Tìm kiếm..." />
                </div>
                <div className="user-cart">
                    <a href="#">
                        <i className="fa fa-user"><img src="/src/SWP_RESOURCE/icon/alone.gif"/></i>
                    </a>
                    <a href="#">
                        <i className="fa fa-shopping-cart"><img src="/src/SWP_RESOURCE/icon/shopping-cart.gif"/></i>
                    </a>
                </div>
            </div>
            <nav className="lower-header">
                <ul>
                    <li>
                        <a href="#">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#">Các gói tiệc</a>
                    </li>
                    <li>
                        <a href="#">Dịch vụ đặc biệt</a>
                    </li>
                    <li>
                        <a href="#">Đặt tiệc sinh nhật</a>
                    </li>
                    <li>
                        <a href="#">Về BirthdayBuddy</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default GuestHeader;

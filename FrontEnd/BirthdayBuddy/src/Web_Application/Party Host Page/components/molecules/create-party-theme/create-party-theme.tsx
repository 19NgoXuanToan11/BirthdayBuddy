import { Link } from "react-router-dom";
import "./create-party-theme.scss";

export default function CreatePartyTheme() {
    return (
        <>
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
        </>
    );
}

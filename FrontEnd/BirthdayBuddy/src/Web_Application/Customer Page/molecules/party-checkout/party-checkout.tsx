import "./party-checkout.scss";
import { Link } from "react-router-dom";

export default function PartyCheckout() {
    return (
        <>
            <h1>THÔNG TIN ĐẶT TIỆC</h1>
            <div className="container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Họ và tên phụ huynh"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <div className="baby-name">
                        <input
                            type="text"
                            placeholder="Họ và tên của bé"
                            className="input input-bordered w-full max-w-xs"
                        />
                        Nam{" "}
                        <input
                            type="radio"
                            name="radio-6"
                            className="radio radio-warning"
                            checked
                        />
                        Nữ{" "}
                        <input
                            type="radio"
                            name="radio-6"
                            className="radio radio-warning"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Tuổi"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <div className="input-version-2">
                        <h5>Chủ đề trang trí</h5>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Bãi biển (2.000.000)</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="input-version-2">
                        <h5>Dịch vụ đặt tiệc</h5>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Đập kẹo Pinata (200.000)</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="input-version-2">
                        <h5>Menu</h5>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Món ăn nhanh</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        placeholder="Số lượng người tham gia"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Ngày đặt tiệc"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Thời gian tổ chức"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Ghi chú"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="text"
                        placeholder="Tổng tiền"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <div className="checkout">
                        <label style={{marginRight: "30px"}}>
                            <input 
                            type="radio"
                            name="radio-2"
                            className="radio radio-primary"
                            checked
                            />
                            Thanh toán bằng tiền mặt (Cọc 50%)
                        </label>
                        <label style={{marginRight: "30px"}}>
                            <input
                                type="radio"
                                name="radio-2"
                                className="radio radio-primary"
                            />
                            Thanh toán online bằng momo
                        </label>
                        <input
                            type="radio"
                            name="radio-2"
                            className="radio radio-primary"
                            checked
                        />
                        Thanh toán online bằng VNPay
                    </div>
                </div>
            </div>
            <div className="checkout-button">
                <Link to="/customer/check-out/payment">
                    <button className="button-checkout-now">Đặt tiệc ngay</button>
                </Link>
                <button className="button-cancel">Hủy</button>
            </div>
        </>
    );
}

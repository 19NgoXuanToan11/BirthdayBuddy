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
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                    />
                    <div className="baby-name">
                        <input
                            type="text"
                            placeholder="Họ và tên của bé"
                            className="baby"
                        />
                        <div className="baby-gender">
                            <label>
                                <input
                                    type="radio"
                                    name="radio-6"
                                    className="radio radio-warning"
                                    checked
                                /> Nam
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="radio-6"
                                    className="radio radio-warning"
                                /> Nữ
                            </label>
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Tuổi"
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
                        <h5>Thực đơn đồ ăn</h5>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Món ăn nhanh</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        placeholder="Số lượng người tham gia"
                    />
                    <div className="choose-time">
                        <input
                            type="text"
                            placeholder="Ngày đặt tiệc"
                        />
                        <input
                            type="text"
                            placeholder="Thời gian tổ chức"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Ghi chú"
                    />
                    <input
                        type="text"
                        placeholder="Tổng tiền"
                    />
                    <div className="check-out">
                        <h5>Phương thức thanh toán</h5>
                        <select className="select select-bordered w-full max-w-xs">
                            <option>Thanh toán trước bằng ngân hàng</option>
                            <option>Thanh toán trước bằng momo</option>
                            <option>Thanh toán sau bằng tiền mặt (Cọc 50%)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="checkout-button">
                <Link to="/customer/payment">
                    <button className="button-checkout-now">Đặt tiệc ngay</button>
                </Link>
                <button className="button-cancel">Hủy</button>
            </div>
        </>
    );
}

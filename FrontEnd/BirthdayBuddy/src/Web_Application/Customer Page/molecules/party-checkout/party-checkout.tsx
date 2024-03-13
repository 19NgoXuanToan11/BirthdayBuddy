import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../../../../src/config/API';
import "./party-checkout.scss"

interface PartyCheckoutProps {
    restaurantId: number; // Change the type according to your actual ID type
}

const PartyCheckout: React.FC<PartyCheckoutProps> = ({ restaurantId }) => {
    const [parentName, setParentName] = useState("");
    const [phone, setPhone] = useState("");
    const [kidName, setKidName] = useState("");
    const [gender, setGender] = useState("");
    const [kidAge, setKidAge] = useState("");
    const [partyTheme, setPartyTheme] = useState("");
    const [specialService, setSpecialService] = useState("");
    const [menu, setMenu] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [time, setTime] = useState("");
    const [note, setNote] = useState("");
    const [totalPrice, setTotalPrice] = useState("");

    const handleBookNow = async () => {
        const partyData = {
            restaurantId,
            parentName,
            phone,
            partyTheme,
            specialService,
            address: '', // Address can be empty for now, but you can add a field for it in your UI
        };

        try {
            const result = await API.addParty(partyData);
            console.log("Party booking created:", result);
        } catch (error) {
            console.error("Error creating party booking:", error);
        }
    };

    return (
        <>
            <h1>THÔNG TIN ĐẶT TIỆC</h1>
            <div className="container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Họ và tên phụ huynh"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="baby-name">
                        <input
                            type="text"
                            placeholder="Họ và tên của bé"
                            className="baby"
                            value={kidName}
                            onChange={(e) => setKidName(e.target.value)}
                        />
                        <div className="baby-gender">
                            <label>
                                <input
                                    type="radio"
                                    name="radio-6"
                                    className="radio radio-warning"
                                    checked={gender === 'Nam'}
                                    onChange={() => setGender('Nam')}
                                /> Nam
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="radio-6"
                                    className="radio radio-warning"
                                    checked={gender === 'Nữ'}
                                    onChange={() => setGender('Nữ')}
                                /> Nữ
                            </label>
                        </div>
                    </div>
                    <input
                        type="text"
                        placeholder="Tuổi"
                        value={kidAge}
                        onChange={(e) => setKidAge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Chủ đề trang trí"
                        value={partyTheme}
                        onChange={(e) => setPartyTheme(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Dịch vụ đặt tiệc"
                        value={specialService}
                        onChange={(e) => setSpecialService(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Thực đơn đồ ăn"
                        value={menu}
                        onChange={(e) => setMenu(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Số lượng người tham gia"
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                    />

                    <div className="choose-time">
                        <input
                            type="date"
                            placeholder="Ngày đặt tiệc"
                            value={bookingDate}
                            onChange={(e) => setBookingDate(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Thời gian tổ chức"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Ghi chú"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Tổng tiền"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(e.target.value)}
                    />

                </div>
            </div>
            <div className="checkout-button">
                <button onClick={handleBookNow} className="button-checkout-now">Đặt tiệc ngay</button>
                <button className="button-cancel">Hủy</button>
            </div>
        </>
    );
};

export default PartyCheckout;

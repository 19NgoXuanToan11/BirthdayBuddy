import React from "react";
import { listPartiesDetails } from "../data/ListOfPartiesDetails.js";
import { useParams } from "react-router-dom";
import "./party-detail.scss";
import { Link } from "react-router-dom";

type PartyDetailParams = {
    id: string; 
};

type Party = {
    id: number;
    name: string;
    imgUrl: string;
    description: string[];
    introduction: string[];
    detailName: string; 
};

export default function PartyDetail() {
    const { id } = useParams<PartyDetailParams>(); 
    const thisParty: Party | undefined = listPartiesDetails.find(
        (party: Party) => String(party.id) === id
    );

    if (!thisParty) {
        return <div>Party not found!</div>;
    }

    return (
        <>
            <h1 className="restaurant-title">THÔNG TIN NHÀ HÀNG</h1>
            <div className="restaurant-detail">
                <img className="restaurant-image" src={thisParty.imgUrl} alt={thisParty.name}/>
                <div className="information-container">
                    <h2 className="restaurant-name">{thisParty.detailName}</h2>
                    <ul className="restaurant-description">
                        {thisParty.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                    <ul className="restaurant-introduction">
                        {thisParty.introduction.map((intro, index) => (
                            <li key={index}>{intro}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="reviews-container">
                <h2>ĐÁNH GIÁ</h2>
                <div className="review-container">
                    <div className="review">
                        <h5 className="reviewer-name">Nguyễn Văn A</h5>
                        <h5 className="reviewer-rating">@</h5>
                        <h5 className="review-text">Con tôi đã rất vui, nhà hàng chu đáo, tận tình hỗ trợ</h5>
                    </div>
                    <div className="review">
                        <h5 className="reviewer-name">Nguyễn Văn B</h5>
                        <h5 className="reviewer-rating">@</h5>
                        <h5 className="review-text">Con tôi đã rất vui, nhà hàng chu đáo, tận tình hỗ trợ</h5>
                    </div>
                    <div className="review">
                        <h5 className="reviewer-name">Nguyễn Văn C</h5>
                        <h5 className="reviewer-rating">@</h5>
                        <h5 className="review-text">Con tôi đã rất vui, nhà hàng chu đáo, tận tình hỗ trợ</h5>
                    </div>
                    <div className="review">
                        <h5 className="reviewer-name">Nguyễn Văn D</h5>
                        <h5 className="reviewer-rating">@</h5>
                        <h5 className="review-text">Con tôi đã rất vui, nhà hàng chu đáo, tận tình hỗ trợ</h5>
                    </div>
                </div>
            </div>
            <div className="booking-container">
                <h2>GÓI TIỆC</h2>
                <form action="" className="booking-container-form">
                    <table>
                        <tr className="booking-header">
                            <thead>
                                <th>Gói tiệc</th>
                                <th>Thông tin chi tiết</th>
                                <th>Giá tiền</th>
                            </thead>
                        </tr>
                        <tr>
                            <tbody >
                                <td>
                                    <ul className="sub-content">
                                        <li>Chủ đề bữa tiệc</li>
                                        <li>Dịch vụ đặc biệt</li>
                                        <li>Menu</li>
                                        <li>Số lượng người tham gia</li>
                                    </ul>
                                </td>
                                <td>
                                    <div className="booking-details">
                                        <li>
                                            <select>
                                                <option value="">Bãi biển</option>
                                                <option value="">Công chúa</option>
                                                <option value="">Siêu nhân</option>
                                                <option value="">Robot</option>
                                                <option value="">Tự chọn</option>
                                            </select>
                                        </li>
                                        <li>
                                            <select>
                                                <option value="">Quà dự tiệc cho bé</option>
                                                <option value="">Đập kẹo Pinata</option>
                                                <option value="">Karaoke</option>
                                                <option value="">MC tiếng anh</option>
                                                <option value="">Ảo thuật diệu kì</option>
                                                <option value="">Vẽ mặt nghệ thuật</option>
                                            </select>
                                        </li>
                                        <li>
                                            <select>
                                                <option value="">Món Âu</option>
                                                <option value="">Món Á</option>
                                                <option value="">Món ăn nhanh</option>
                                            </select>
                                        </li>
                                        <p>--</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="cost">
                                        <p>2000000</p>
                                        <p>2000000</p>
                                        <p>2000000</p>
                                        <p>2000000</p>
                                    </div>
                                </td>
                            </tbody>
                        </tr>
                    </table>
                    <div className="booking-actions">
                        <Link to="/checkout">
                            <button className="button-book-now">Đặt tiệc ngay</button>
                        </Link>
                        <button className="button-view-more">Xem nhà hàng khác</button>
                    </div>
                </form>
            </div>
        </>
    );
}

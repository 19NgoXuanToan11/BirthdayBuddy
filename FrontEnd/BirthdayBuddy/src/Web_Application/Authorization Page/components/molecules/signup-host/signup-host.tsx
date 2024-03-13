import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup-host.scss";

function SignUpHost() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="regisHostPage">
        <div className="overlay"></div>
        <div className="registerHost">
          <div className="logoLoginHost">
            <img src="./Logo.png" alt=""></img>
          </div>
          <div className="group">
            <input type="text" placeholder="Tên nhà hàng" />
          </div>
          <div className="group">
            <input type="text" placeholder="Số điện thoại" />
          </div>
          <div className="group">
            <input type="text" placeholder="Giờ mở cửa" />
            <input type="time" />
          </div>
          <div className="group">
            <input type="text" placeholder="Giờ đóng cửa" />
            <input type="time" />
          </div>
          <div className="group">
            <select className="group1">
              <option disabled selected>
                Thể loại bữa tiệc
              </option>
              <option>Tiệc sinh nhật tại gia</option>
              <option>Tiệc sinh nhật ngoài trời</option>
              <option>Tiệc sinh nhật trong nhà</option>
            </select>
          </div>

          <div className="group">
            <select className="group1">
              <option disabled selected>
                Chủ đề bữa tiệc mà nhà hàng có thể phục vụ
              </option>
              <option>Bãi biển</option>
              <option>Công chúa</option>
              <option>Siêu nhân</option>
              <option>Robot</option>
              <option>Tự chọn</option>
            </select>
          </div>
          <div className="group">
            <input type="text" placeholder="Dịch vụ đặc biệt" />
          </div>
          <div className="group">
            <input type="text" placeholder="Địa chỉ nhà hàng" />
          </div>
          <Link to={"/restaurant-list"} type="submit">
            <button style={{ width: "250px", marginRight: "70px" }}>
              Đăng ký
            </button>
          </Link>
          <Link to={"/login"} type="submit">
            <button style={{ width: "250px" }}>Hủy</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpHost;

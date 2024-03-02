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
            <input type="text" placeholder="Tên đăng nhập" />
          </div>
          <div className="group">
            <input type="text" placeholder="Email" />
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
            />
            <button
              type="button"
              style={{
                backgroundColor: "transparent",
                color: "red",
                border: "none",
                marginRight: "17px",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Xác nhận lại mật khẩu"
            />
            <button
              type="button"
              style={{
                backgroundColor: "transparent",
                color: "red",
                border: "none",
                marginRight: "17px",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
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
            <input type="text" placeholder="Thành phố Hồ Chí Minh" />
          </div>
          <div className="group">
            <select className="group1">
              <option disabled selected>
                Quận
              </option>
              <option>Quận 1</option>
              <option>Quận 2</option>
              <option>Quận 3</option>
              <option>Quận 4</option>
              <option>Quận 5</option>
            </select>
          </div>
          {/* <div className="signUpHost"> */}
          <Link to={"/restaurant-list"} type="submit">
            <button style={{ width: "250px", marginRight: "70px" }}>
              Đăng ký
            </button>
          </Link>
          {/* </div> */}

          <Link to={"/login"} type="submit">
            <button style={{ width: "250px" }}>Hủy</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignUpHost;

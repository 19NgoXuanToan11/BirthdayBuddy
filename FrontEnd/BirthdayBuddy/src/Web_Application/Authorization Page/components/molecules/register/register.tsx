import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="regisPage">
        <div className="overlay"></div>
        <div className="register">
          <div className="logoLogin">
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
          <div className="signUp">
            <Link to={"/login"} type="submit">
              <button>Đăng ký</button>
            </Link>
          </div>
          <Link
            style={{ color: "#595454", textDecoration: "none" }}
            to={"/login"}
          >
            <div className="title">Bạn đã có tài khoản?</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;

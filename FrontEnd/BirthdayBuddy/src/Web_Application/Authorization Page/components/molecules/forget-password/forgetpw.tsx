import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forgetpw.scss";

function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="regisPage">
        <div className="overlay"></div>
        <div className="registerPass" style={{ height: "580px" }}>
          <div className="logoLogin">
            <img src="./Logo.png" alt=""></img>
          </div>
          <div className="group">
            <input type="text" placeholder="Email" />
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Đặt lại mật khẩu"
            />
            <button
              type="button"
              style={{
                backgroundColor: "transparent",
                color: "red",
                border: "none",
                marginRight: "5px",
                marginBottom: "15px",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Xác nhận mật khẩu mới"
            />
            <button
              type="button"
              style={{
                backgroundColor: "transparent",
                color: "red",
                border: "none",
                marginRight: "5px",
                marginBottom: "15px",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="group">
            <input type="text" placeholder="OTP" />
          </div>
          <div className="resend">Chưa nhận được mã? Gửi lại</div>
          {/* <div className="signUp"> */}
          <Link to={"/login"} type="submit">
            <button style={{ fontSize: "20px", width: "300px" }}>
              Đặt lại mật khẩu
            </button>
          </Link>
          {/* </div> */}
          <Link
            style={{ color: "#595454", textDecoration: "none" }}
            to={"/login"}
          >
            <div className="titlee">Quay lại đăng nhập</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;

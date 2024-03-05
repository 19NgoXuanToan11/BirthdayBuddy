import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginPage">
      <div className="login">
        <div className="logoLogin">
          <img src="./Logo.png" alt="" />
        </div>
        <form>
          <div className="group">
            <input type="text" placeholder="Tên Đăng Nhập" />
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật Khẩu"
            />
            <button
              type="button"
              style={{
                backgroundColor: "transparent",
                color: "red",
                marginRight: "5px",
                marginTop: "0px",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="signIn">
            <Link to={"/customer"}>
              <button type="submit">Login</button>
            </Link>
          </div>
          <div className="register-prompt">
            <div className="account-absent">
              <div className="bn-cha-c" id="bnChaC">
                <Link
                  style={{ color: "#595454", textDecoration: "none" }}
                  to={"/register"}
                >
                  Bạn chưa có tài khoản ?
                </Link>
              </div>

              <div className="bn-mun-ng" id="bnMunNg">
                <Link
                  style={{ color: "#595454", textDecoration: "none" }}
                  to={"/signuphost"}
                >
                  Bạn muốn đăng kí nhà hàng?
                </Link>
              </div>
            </div>
            <Link
              style={{ color: "#595454", textDecoration: "none" }}
              to={"/forgetpw"}
            >
              <div className="t-li-mt" id="tLiMt">
                Đặt lại mật khẩu
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.scss";
import { loginAPI } from "../../../../../../src/config/authAPI"; // Update the path accordingly

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const res = await loginAPI({ username, password });
      if (res) {
        // Handle successful login, such as storing user data in sessionStorage
        console.log("Login successful");
        // Redirect or perform other actions after successful login
      } else {
        // Handle login failure, display error message to the user
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      toast.error("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className="loginPage">
      <div className="login">
        <div className="logoLogin">
          <img src="./Logo.png" alt="" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="group">
            <input type="text" placeholder="Tên Đăng Nhập" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật Khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button type="submit">Login</button>
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

export default Login;

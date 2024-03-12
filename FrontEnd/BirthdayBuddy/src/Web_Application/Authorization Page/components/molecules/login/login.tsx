import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.scss";
import { authAPI } from "../../../../../../src/config/authAPI";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!username || !password) {
    toast.error("Please enter both username and password.");
    return;
  }
  try {
    const user = await authAPI.loginApi({
      username: username,
      password: password,
    });
    if (user && user.roleId) {
      console.log("Đăng nhập thành công ");
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      console.log(user);
      const roleId = user.roleId;
      if (roleId === 2) {
        navigate(`/host/${user.id}`);
      } else if (roleId === 3) {
        navigate(`/customer/${user.id}`);
      } else {
        toast.error("Unauthorized access.");
      }
    } else {
      toast.error("Đăng nhập thất bại");
    }
  } catch (error) {
    console.error("Đăng nhập thất bại:", error);
    toast.error("Login failed. Please check your credentials.");
  }
};

  return (
    <div className="loginPage">
      <div className="login">
        <div className="logoLogin">
          <img src="./Logo.png" alt="Logo" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="group">
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
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
              {showPassword ? "Ẩn" : "Hiện"}
            </button>
          </div>

          <div className="signIn">
            <button type="submit">Đăng nhập</button>
          </div>
          <div className="register-prompt">
            <div className="account-absent">
              <div className="bn-cha-c" id="bnChaC">
                <Link
                  style={{ color: "#595454", textDecoration: "none" }}
                  to={"/register"}
                >
                  Bạn chưa có tài khoản?
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
};

export default Login;

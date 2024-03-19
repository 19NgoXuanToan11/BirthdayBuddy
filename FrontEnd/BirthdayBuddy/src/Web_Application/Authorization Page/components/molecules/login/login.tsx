import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.scss";
import api from "../../../../../../src/config/axios";

const Login: React.FC = () => {
  const user = sessionStorage.getItem('loginedUser') ? JSON.parse(sessionStorage.getItem('loginedUser')) : null;
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
      toast.error("Vui lòng nhập đầy đủ thông tin đăng nhập.");
      return;
    }

    try {
      const response = await api.post("login?username=" + username + "&password=" + password);
      if (response.status === 200) {
        const data = response.data;
        if (data.errorMessage === "User is not exist") {
          toast.error("Tên đăng nhập không có trong hệ thống. Vui lòng kiểm tra lại!");
        } else {
          if (data.errorMessage !== "Password is not correct") {
            sessionStorage.setItem('loginedUser', JSON.stringify(data.payload));
            localStorage.setItem('loginSuccessNotify', 'Đăng nhập thành công!');
            location.reload();
          } else {
            toast.error("Mật khẩu không đúng. Vui lòng nhập lại!");
          }
        }
      } else {
        console.log("Xảy ra lỗi khi nhận dữ liệu");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = sessionStorage.getItem("loginedUser") ? JSON.parse(sessionStorage.getItem("loginedUser")) : null;
    if (user !== null) {
      navigate('/');
    }
    console.log(window.location.href);
  }, [user]);


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

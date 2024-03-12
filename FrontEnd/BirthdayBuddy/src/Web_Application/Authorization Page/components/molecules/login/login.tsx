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
      console.log("Login successful");
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      console.log(user);
      const roleId = user.roleId;
      if (roleId === 2) {
        navigate('/host/list-party');
      } else if (roleId === 3) {
        navigate(`/customer/${user.id}`);
      } else {
        toast.error("Unauthorized access.");
      }
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error("Login failed:", error);
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
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
                  Don't have an account?
                </Link>
              </div>
            </div>
            <Link
              style={{ color: "#595454", textDecoration: "none" }}
              to={"/forgetpw"}
            >
              <div className="t-li-mt" id="tLiMt">
                Reset password
              </div>
            </Link>
          </div>
          <Link
            style={{ color: "#595454", textDecoration: "none" }}
            to={"/signuphost"}
          >
            <div className="t-li-mt" id="tLiMt">
              Register restaurant
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

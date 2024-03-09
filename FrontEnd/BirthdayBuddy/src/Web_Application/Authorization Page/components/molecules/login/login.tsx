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
      if (res && res.success) {
        console.log("Login successful");
        // Redirect or perform other actions after successful login
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with status:", error.response.status);
        toast.error("Server Error. Please try again later.");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        toast.error("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
        toast.error("An unexpected error occurred. Please try again later.");
      }
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
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
          {/* <div className="register-prompt">
            <div className="account-absent">
              <div className="bn-cha-c" id="bnChaC">
                <Link
                  style={{ color: "#595454", textDecoration: "none" }}
                  to={"/register"}
                >
                  Don't have an account?
                </Link>
              </div>

              <div className="bn-mun-ng" id="bnMunNg">
                <Link
                  style={{ color: "#595454", textDecoration: "none" }}
                  to={"/signuphost"}
                >
                  Want to register as a restaurant?
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
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Login;

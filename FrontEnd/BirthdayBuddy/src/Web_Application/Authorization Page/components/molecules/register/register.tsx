import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { toast } from "react-toastify";
import { authAPI } from "../../../../../../src/config/authAPI";

function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    email: "",
    phone: "",
    roleId: -1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
      const res = await authAPI.registerApi(formData);
      if (res && res.success) {
        console.log(res);
        console.log("Register successful");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="regisPage">
      <div className="overlay"></div>
      <div className="register" style={{ height: "550px" }}>
        <div className="logoLogin">
          <img src="./Logo.png" alt=""></img>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="group">
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              value={formData.username} 
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mật khẩu"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Xác nhận lại mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="group">
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="group">
            <select
              name="roleId"
              value={formData.roleId}
              onChange={handleChange}
            >
              <option value="">--Chọn vai trò--</option>
              <option value="1">Customer</option>
              <option value="2">Host</option>
            </select>
          </div>
          <button type="submit" style={{ fontSize: "20px", width: "300px" }}>
            Đăng ký
          </button>
        </form>
        <Link to={"/login"} style={{ color: "#595454", textDecoration: "none" }}>
          <div className="title">Bạn đã có tài khoản?</div>
        </Link>
      </div>
    </div>
  );
}

export default Register;

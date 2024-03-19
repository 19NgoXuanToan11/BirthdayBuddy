import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { toast } from "react-toastify";
import api from "../../../../../../src/config/axios";

function Register() {
  // const [showPassword, setShowPassword] = useState<boolean>(false);
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   password: "",
  //   confirmPassword: "",
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   roleId: -1,
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ): void => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const togglePasswordVisibility = (): void => {
  //   setShowPassword(!showPassword);
  // };

  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ): Promise<void> => {
  //   e.preventDefault();
  //   try {
  //     if (formData.password !== formData.confirmPassword) {
  //       toast.error("Passwords do not match");
  //       return;
  //     }
  //     const res = await authAPI.registerApi(formData);
  //     if (res) {
  //       console.log("Register successful");
  //       navigate("/login");
  //       alert("Đăng ký thành công");
  //     } else {
  //       toast.error("Registration failed. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error occurred during registration:", error.response.data);
  //     toast.error("An unexpected error occurred. Please try again later.");
  //   }
  // };

  // return (
  //   <div className="regisPage">
  //     <div className="overlay"></div>
  //     <div className="register">
  //       <div className="logoLogin">
  //         <img src="./Logo.png" alt=""></img>
  //       </div>
  //       <form onSubmit={handleSubmit}>
  //         <div className="group">
  //           <input
  //             type="text"
  //             name="userName"
  //             placeholder="Tên đăng nhập"
  //             value={formData.userName}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div className="group">
  //           <input
  //             type={showPassword ? "text" : "password"}
  //             name="password"
  //             placeholder="Mật khẩu"
  //             value={formData.password}
  //             onChange={handleChange}
  //           />
  //           <button
  //             type="button"
  //             style={{
  //               backgroundColor: "transparent",
  //               color: "red",
  //               marginRight: "5px",
  //               marginTop: "0px",
  //             }}
  //             onClick={togglePasswordVisibility}
  //           >
  //             {showPassword ? "Ẩn" : "Hiện"}
  //           </button>
  //         </div>
  //         <div className="group">
  //           <input
  //             type={showPassword ? "text" : "password"}
  //             name="confirmPassword"
  //             placeholder="Xác nhận lại mật khẩu"
  //             value={formData.confirmPassword}
  //             onChange={handleChange}
  //           />
  //           <button
  //             type="button"
  //             style={{
  //               backgroundColor: "transparent",
  //               color: "red",
  //               marginRight: "5px",
  //               marginTop: "0px",
  //             }}
  //             onClick={togglePasswordVisibility}
  //           >
  //             {showPassword ? "Ẩn" : "Hiện"}
  //           </button>
  //         </div>
  //         <div className="group">
  //           <input
  //             type="text"
  //             name="fullName"
  //             placeholder="Họ và Tên"
  //             value={formData.fullName}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div className="group">
  //           <input
  //             type="email"
  //             name="email"
  //             placeholder="Email"
  //             value={formData.email}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div className="group">
  //           <input
  //             type="text"
  //             name="phone"
  //             placeholder="Số điện thoại"
  //             value={formData.phone}
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div className="group">
  //           <select
  //             className="group2"
  //             name="roleId"
  //             value={formData.roleId}
  //             onChange={handleChange}
  //           >
  //             <option value={-1}>--Chọn vai trò--</option>
  //             <option value={2}>Khách hàng</option>
  //             <option value={3}>Chủ nhà hàng</option>
  //           </select>
  //         </div>
  //         <button type="submit" style={{ fontSize: "20px", width: "300px" }}>
  //           Đăng ký
  //         </button>
  //       </form>
  //       <Link
  //         to={"/login"}
  //         style={{ color: "#595454", textDecoration: "none" }}
  //       >
  //         <div className="title">Bạn đã có tài khoản?</div>
  //       </Link>
  //     </div>
  //   </div>
  // );
}

export default Register;

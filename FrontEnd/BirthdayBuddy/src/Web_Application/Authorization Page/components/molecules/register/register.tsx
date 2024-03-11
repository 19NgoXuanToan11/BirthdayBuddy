// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'; // Import Axios for making HTTP requests
// import "./register.scss";
// import { toast } from "react-toastify";

// function Register() {
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     fullname: "",
//     email: "",
//     phone: "",
//     roleId: -1,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
//     const { name, value } = e.target;
//     if (name === "roleId") {
//         const selectedRoleId = value === "" ? null : parseInt(value, 10);
//         setFormData({ ...formData, roleId: selectedRoleId });
//     } else {
//         setFormData({ ...formData, [name]: value });
//     }
// };


  

//   const togglePasswordVisibility = (): void => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     try {
//       const res = await registerAPI(formData);
//       if (res && res.success) {
//         console.log("Register successful");
//         // Redirect or perform other actions after successful login
//       } else {
//         toast.error("Invalid username or password");
//       }
//     } catch (error) {
//       console.error("Error occurred during login:", error);
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error("Server responded with status:", error.response.status);
//         toast.error("Server Error. Please try again later.");
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error("No response received:", error.request);
//         toast.error("No response from server. Please try again later.");
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         console.error("Error setting up request:", error.message);
//         toast.error("An unexpected error occurred. Please try again later.");
//       }
//     }
//   };

//   return (
//     <div className="regisPage">
//       <div className="overlay"></div>
//       <div className="register" style={{ height: "550px" }}>
//         <div className="logoLogin">
//           <img src="./Logo.png" alt=""></img>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="group">
//             <input
//               type="text"
//               name="username"
//               placeholder="Tên đăng nhập"
//               value={formData.username}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="group">
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="group">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Mật khẩu"
//               value={formData.fullname}
//               onChange={handleChange}
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           <div className="group">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="confirmPassword"
//               placeholder="Xác nhận lại mật khẩu"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <button
//               type="button"
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           <div className="group">
//             <input
//               type="text"
//               name="phone"
//               placeholder="Số điện thoại"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="group">
//             <select
//               name="roleId"
//               value={formData.roleId}
//               onChange={handleChange}
//             >
//               <option value="">--Chọn vai trò--</option>
//               <option value="1">Customer</option>
//               <option value="2">Host</option>
//             </select>
//           </div>
//           <button type="submit" style={{ fontSize: "20px", width: "300px" }}>
//             Đăng ký
//           </button>
//         </form>
//         <Link to={"/login"} style={{ color: "#595454", textDecoration: "none" }}>
//           <div className="title">Bạn đã có tài khoản?</div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Register;

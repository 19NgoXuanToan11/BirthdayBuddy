// import React, { useEffect } from "react";
import { FunctionComponent, useCallback } from "react";
import "./register.scss";



const Register: FunctionComponent = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "Signin Page" to the project
  }, []);

  const onNgKTextClick = useCallback(() => {
    // Please sync "Signin Page" to the project
  }, []);

  const onBnCClick = useCallback(() => {
    // Please sync "Signin Page" to the project
  }, []);

  return (
    <div className="signup-page"> {/* Move the signup-page class to wrap the form */}
      <main className="image-1-parent">
        <img className="image-1-icon" alt="" src="/src/SWP_RESOURCE/pictures/login.jpg" />
        <form className="rectangle-parent"> {/* Adjust the form positioning */}
          <div className="frame-child" />
          <div className="frame-parent">
            <div className="rectangle-wrapper">
              <img
                className="frame-item"
                loading="eager"
                alt=""
                src="/src/SWP_RESOURCE/Logo.png"
              />
            </div>
            <div className="rectangle-group">
              <div className="frame-inner" />
              <input
                className="tn-ng-nhp"
                placeholder="Tên đăng nhập"
                type="text"
              />
            </div>
          </div>
          <div className="email-frame-parent">
            <div className="email-frame" />
            <div className="email">
              <input className="xc-nhn-mt" placeholder="Email" type="text"  style={{marginBottom:'30px'}}/>
            </div>
            
          </div>
          <div className="frame-wrapper">
            <div className="rectangle-container">
              <div className="rectangle-div" />
              <input className="mt-khu" placeholder="Mật khẩu" type="password" />
            </div>
          </div>
          <div className="frame-container">
            <div className="group-div">
              <div className="frame-child1" />
              <input
                className="xc-nhn-mt"
                placeholder="Xác nhận mật khẩu"
                type="password"
              />
            </div>
          </div>
          <div className="registration-form-frame">
            <div className="frame-group">
              <button className="group-button">
                <div className="frame-child2" onClick={onRectangleClick} />
                <div className="ng-k" onClick={onNgKTextClick}>{`Đăng ký `}</div>
              </button>
              <div className="bn-c-ti-khon-wrapper">
                <div className="bn-c" onClick={onBnCClick}>
                  Bạn đã có tài khoản?
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Register;

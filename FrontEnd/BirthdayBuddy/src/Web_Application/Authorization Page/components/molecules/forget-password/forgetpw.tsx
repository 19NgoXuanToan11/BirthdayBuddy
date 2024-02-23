import { FunctionComponent, useCallback } from "react";
import "./forgetpw.scss";

const ForgetPassword: FunctionComponent = () => {
  const onFinalSubmitButtonClick = useCallback(() => {
    // Please sync "Signin Page" to the project
  }, []);

  const onTLiMt1Click = useCallback(() => {
    // Please sync "Signin Page" to the project
  }, []);

  const onQuayLiNgClick = useCallback(() => {
    // Please sync "Signin Page" to the project
  }, []);

  return (
    <div className="forget-password-page">
      <main className="image-1-parent">
      <img className="image-1-icon" alt="" src="/src/SWP_RESOURCE/pictures/login.jpg" />
   <form className="rectangle-parent">   
    <div className="main-frame">
      <div className="main-frame-child" />
      <div className="header-frame">
        <div className="second-parent-frame">
          <img
            className="code-rectangle-icon"
            loading="eager"
            alt=""
            src="/src/SWP_RESOURCE/Logo.png"
          />
          <div className="third-parent-frame">
            <div className="third-parent-frame-child" />
            <input className="email" placeholder="Email" type="text" />
          </div>
        </div>
      </div>
      <div className="inner-frame">
        <div className="nested-parent-frame">
          <div className="nested-parent-frame-child" />
          <input
            className="t-li-mt"
            placeholder="Đặt lại mật khẩu"
            type="text"
          />
        </div>
      </div>
      <div className="inner-frame1">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <input
            className="xc-nhn-mt"
            placeholder="Xác nhận mật khẩu mới"
            type="text"
          />
        </div>
      </div>
      <div className="retrieve-o-t-p">
        <div className="o-t-p-t-e-x-t-wrapper">
          <div className="o-t-p-t-e-x-t">
            <div className="o-t-p-t-e-x-t-child" />
            <input className="otp" placeholder="OTP" type="text" />
          </div>
        </div>
        <div className="error-message">
          <div className="cha-nhn-c">Chưa nhận được mã? Gửi lại</div>
          <div className="reset-password-button">
        
            <div className="nt-t-li-mt-khu">
              <div
                className="final-submit-button"
                onClick={onFinalSubmitButtonClick}
              />
              <div className="t-li-mt1" onClick={onTLiMt1Click}>
                {`Đặt lại mật khẩu`}
              </div>
            </div>
         
            
          </div>
        </div>
      </div>
      <div className="back-to-login-frame">
        <div className="quay-li-ng" onClick={onQuayLiNgClick}>
          Quay lại đăng nhập
        </div>
      </div>
    </div>
    </form> 
    </main>
    </div>
  );
};

export default ForgetPassword;

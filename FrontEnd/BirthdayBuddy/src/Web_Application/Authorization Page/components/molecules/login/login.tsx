import React, { useEffect } from 'react';
import './login.scss'; 
import { Link } from 'react-router-dom';

function Login() {

    useEffect(() => {
        const ngNhpText = document.getElementById("ngNhpText");
        if (ngNhpText) {
            ngNhpText.addEventListener("click", function (e) {
                // Please sync "Customer Page" to the project
            });
        }

        const bnChaC = document.getElementById("bnChaC");
        if (bnChaC) {
            bnChaC.addEventListener("click", function (e) {
                // Please sync "Signup Page" to the project
            });
        }

        const bnMunNg = document.getElementById("bnMunNg");
        if (bnMunNg) {
            bnMunNg.addEventListener("click", function (e) {
                // Please sync "Signup Host Page" to the project
            });
        }

        const tLiMt = document.getElementById("tLiMt");
        if (tLiMt) {
            tLiMt.addEventListener("click", function (e) {
                // Please sync "Forget password Page" to the project
            });
        }
    }, []);

    return (
        <div className="signin-page">
            <img className="image-1-icon" alt="login" src="../../../../../src/SWP_RESOURCE/pictures/login.jpg" />

            <div className="main-frame">
                <div className="main-frame-child"></div>
                <div className="inner-frame">
                    <img
                        className="input-frame-icon"
                        loading="eager"
                        alt=""
                        src="../../../../../src/SWP_RESOURCE/Logo.png"
                    />

                    <div className="username-input">
                        <div className="username-input-child"></div>
                        <input className="tn-ng-nhp" placeholder="Tên đăng nhập" type="text" />
                    </div>
                </div>
                <div className="error-message-frame">
                    <div className="frame-wrapper">
                        <div className="frame-wrapper-child"></div>
                        <input className="mt-khu" placeholder="Mật khẩu" type="text" />
                    </div>
                    <div className="frame-wrapper1">
                        <div className="frame-wrapper-item"></div>
                        <div className="ng-nhp" id="ngNhpText">
                        <Link to="/check-out">
                            Đăng nhập
                        </Link>
                        </div>
                    </div>
                    <div className="register-prompt">
                        <div className="account-absent">
                            <div className="bn-cha-c" id="bnChaC">Bạn chưa có tài khoản?</div>
                            <div className="bn-mun-ng" id="bnMunNg">Bạn muốn đăng kí nhà hàng?</div>
                        </div>
                        <div className="t-li-mt" id="tLiMt">Đặt lại mật khẩu</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

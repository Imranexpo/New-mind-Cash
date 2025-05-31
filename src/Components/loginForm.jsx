import React,{useState} from 'react';
import '../style/LoginForm.css';
import { MainLoginContent, AdContent } from './LoginComman';
import { getLoginViewState } from '../mainFunction/STfuntions.js'; // 👈 Your separate file

const LoginForm = () => {
  const className = {
    container: 'd-flex justify-content-center align-items-center vh-100',
    formWrapper: 'd-flex flex-column p-2 flex-md-row bg-white rounded shadow-lg w-50 overflow-hidden',
    formBox: 'w-100 w-md-50 p-4',
    adSection: 'w-100 w-md-50 text-white rounded d-none d-md-flex align-items-center justify-content-center',
  };
  const [isOtpView, setIsOtpView] = useState(false);
  const [isOtpVerificationView, setIsOtpVerificationView] = useState(false);
  const {mainLoginDisplay, otpLoginDisplay, backToLoginDisplay, loginAdDisplay, otpAdDisplay, googleTodisplay, otpAdContentDisplay, otpVerificationDisplay } = getLoginViewState(isOtpView, isOtpVerificationView);
  return (
    <div className={`${className.container} bg-light, bg-container`}>
      <div className={className.formWrapper}>
        <div className={className.formBox} style={{position:'relative'}}>
          <MainLoginContent 
           isOtpView={isOtpView}
           setIsOtpView={setIsOtpView}
           isOtpVerificationView={isOtpVerificationView}
           setIsOtpVerificationView={setIsOtpVerificationView}
           mainLoginDisplay={mainLoginDisplay}
           otpLoginDisplay={otpLoginDisplay}
           backToLoginDisplay={backToLoginDisplay}
           googleTodisplay={googleTodisplay}
           otpVerificationDisplay={otpVerificationDisplay}/>
         </div>
         <div className={`${className.adSection}, screen_full_bg`} style={{position:'relative'}}>
          <AdContent loginAdDisplay={loginAdDisplay} otpAdDisplay={otpAdDisplay} otpAdContentDisplay={otpAdContentDisplay}/>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

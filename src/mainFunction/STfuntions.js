const getLoginViewState = (isOtpView, isOtpVerificationView) => {
    return {
      mainLoginDisplay: isOtpView || isOtpVerificationView ? 'none' : 'block',
      otpLoginDisplay: isOtpView && !isOtpVerificationView ? 'block' : 'none',
      backToLoginDisplay: isOtpView || isOtpVerificationView ? 'block' : 'none',
      googleTodisplay: isOtpView || isOtpVerificationView ? 'none' : 'block',
      loginAdDisplay: isOtpView || isOtpVerificationView ? 'none' : 'block',
      otpAdDisplay: isOtpView && !isOtpVerificationView ? 'block' : 'none',
      otpAdContentDisplay: isOtpView || isOtpVerificationView ? 'none' : 'block',
      otpVerificationDisplay: isOtpVerificationView ? 'block' : 'none'
    };
};

const handleChange = (element, index, otp, setOtp, inputsRef) => {
    const value = element.value.replace(/[^0-9]/g, '');
    if (!value) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (index < 5 && value !== '') {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index, otp, setOtp, inputsRef) => {
    if (e.key === 'Backspace') {
      const updatedOtp = [...otp];
      updatedOtp[index] = '';
      setOtp(updatedOtp);
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  export { getLoginViewState, handleChange, handleKeyDown };

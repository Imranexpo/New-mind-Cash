import { FormControl, TextField, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { handleChange, handleKeyDown } from '../mainFunction/STfuntions.js'; 
import LoginadImg from '../assets/Estudante_Masculino_Sorridente_Elemento_PSD-removebg-preview.png';
import LoginotpImg from '../assets/Portrait_of_young_boy_student_in_casual_clothes_isolated_over_transparent_studio_background_From_admission_to_graduation_Concept_of_education_studying_and_student_lifestyle_Copy_space_for_ad___Premium.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfileImg from '../assets/41697.jpg'
import EditIcon from '@mui/icons-material/Edit';
//mainLogincontent section
export const MainLoginContent = (props) => {
     const [otp, setOtp] = useState(new Array(6).fill(''));
     let inputsRef = useRef([]);
    return (
        <div> 
        <form id='main-login' style={{display: props.mainLoginDisplay}}>
            <h2 className="text-center">Login</h2> 
            <div className="mb-3">
                <FormControl fullWidth>
                    <TextField id="email_username" label="Username or Email " type="email" placeholder="Enter Your Username or Email" variant="standard" />
                </FormControl>
            </div>
            <div className="mb-0">
                <FormControl fullWidth>
                    <TextField id="password" label="Password" type="password" placeholder="Enter Your Password" variant="standard" />
                </FormControl>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center mt-4" style={{ fontSize: '12x' }}>
                    <p className='otp-refer' data-bs-toggle="tooltip" data-bs-placement="top" title="Sign in with OTP" onClick={()=> props.setIsOtpView(true)}>Sign in OTP</p>
                </div>
                <div><a href="#" className="text-decoration-none text-primary" style={{ fontSize: '12px' }}>Forgot Password?</a></div>
            </div>
            <div className='mb-3'>
                <Button variant="contained" fullWidth sx={{ textTransform: 'none' }}>Login</Button>
            </div>
            <div className='mb-3'>
                <span style={{ fontSize: '12px' }}>Don't have an account?<Link to={"/Registration"} style={{ textDecoration: 'none' }}>&nbsp;Create an account</Link></span>
            </div>
        </form>
        <form style={{display: props.otpLoginDisplay}}>
            <h2 className='text-center mb-4'>Login with OTP</h2>
            <div className="mb-4">
                <FormControl fullWidth>
                    <TextField id="email" label="Email or Phone " type="email" placeholder="Enter Your Email or Phone" variant="standard" />
                </FormControl>
            </div>
            <div className='mb-3'>
                <Button variant="contained" fullWidth sx={{ textTransform: 'none' }} onClick={()=> props.setIsOtpVerificationView(true) }>Send OTP</Button>
            </div>
        </form>
        <form style={{display:props.otpVerificationDisplay}}> 
          <h2 className='text-center mb-2'>OTP verification</h2>
          <div className='user-profile mb-3 text-center'>
            {ProfileImg ? (
                <img 
                src={ProfileImg}
                alt='user'
                className='profile-pic'
                />
            ) : (
                <AccountCircleIcon sx={{fontSize: 80, color:'#007bff'}}/>
            )}  
            <div className='user-email mt-2 d-flex align-items-center justify-content-center gap-2'>
                <span>imranexpo864@gmail.com</span>
                <button className='edit-btn mb-1'>
                  <EditIcon sx={{fontSize: 20}}/>
                </button>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target, index, otp, setOtp, inputsRef)}
                onKeyDown={(e) => handleKeyDown(e, index, otp, setOtp, inputsRef)}
                ref={(el) => (inputsRef.current[index] = el)}
                className="form-control text-center"
                style={{ width: '45px', height: '50px', fontSize: '20px', borderRadius: '8px'}}
              />
            ))}
          </div>
          <div className='otp-timer mb-3'>
            01 : 00
          </div>
          <div className='otp-resend mb-3'>
            <span>OTP don't received? <a href='#'>RESEND</a></span>
          </div>
          <div className='mb-3'>
          <Button variant="contained" fullWidth sx={{ textTransform: 'none' }}>Submit</Button>
          </div>
        </form>
        <div className='mb-3'>
            <Divider>OR</Divider>
        </div>
        <div className='mb-2' style={{display: props.googleTodisplay}}>
            <Button variant="outlined" startIcon={<i className="bi bi-google mt-0" style={{ background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)', '-webkit-background-clip': 'text', color: 'transparent', }}></i>} fullWidth style={{ textTransform: 'none' }}>Continue with Google</Button>
        </div>
        <div className='mb-1' style={{display: props.backToLoginDisplay}}>
            <Button variant='outlined'  startIcon={<LockOpenIcon sx={{marginBottom:0.5}}/>} fullWidth onClick={() => {props.setIsOtpView(false); props.setIsOtpVerificationView(false); }} sx={{textTransform:'none'}} >Use Password Login</Button>
        </div> 
        </div>
    );
};

//adContent section
export const AdContent = (props) => {
    return (
        <div>
            <div className='screen-ad-img' style={{display: props.loginAdDisplay}}>
                <img src={LoginadImg} alt="Advertisement" className="advertisement-image" />
            </div>
            <div className='screen-ad-img-1' style={{display: props.otpAdDisplay}}>
                <img src={LoginotpImg} alt='Advertisement' className='advertisement-image' />
            </div>
            <div className="screen_background" sx={{ flex: 1, position: 'absolute' }}>
                <div className="message-carousel-container" style={{display: props.otpAdContentDisplay}}>
                    <Carousel interval={3000} controls={false} indicators={false} pause={false}>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center align-items-center" >
                                <p className="carousel-text">Where Teachers and Students Meet Minds Collaborate, Learn, and Compete with the Best.</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center align-items-center" >
                                <p className="carousel-text">Mind Clash Ignite Learning, Inspire Minds A vibrant hub for teachers and students to grow together.</p>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex justify-content-center align-items-center" >
                                <p className="carousel-text">Challenge Your Mind with Mind Clash Where teaching meets learning in a dynamic way.</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <span className='screen__background__shape screen__background__shape4'></span>
                <span className='screen__background__shape screen__background__shape3'></span>
                <span className='screen__background__shape screen__background__shape2'></span>
            </div>
            <div className='d-flex justify-content-between' style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
            <Button variant="contained" component={Link} to="/StudentDash"> Student Demo </Button>
               <Button variant='contained'>Teacher Demo</Button>
            </div>
        </div>
    )
}






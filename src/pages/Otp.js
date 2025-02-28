import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Otp() {
  const navigate = useNavigate();
  const location = useLocation();

  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const otp1Ref = useRef();
  const otp2Ref = useRef();
  const otp3Ref = useRef();
  const otp4Ref = useRef();
  const otp5Ref = useRef();
  const otp6Ref = useRef();

  useEffect(() => {
    otp1Ref.current?.focus();
  }, []);

  useEffect(() => {
    if(!location.state) {
      navigate('/login');
    }
  }, [location.state]);

  useEffect(() => {
    toast.success("OTP has been sent your email.");
  }, []);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      switch (index) {
        case 1:
          setOtp1(value);
          otp2Ref.current?.focus();
          break;
        case 2:
          setOtp2(value);
          otp3Ref.current?.focus();
          break;
        case 3:
          setOtp3(value);
          otp4Ref.current?.focus();
          break;
        case 4:
          setOtp4(value);
          otp5Ref.current?.focus();
          break;
        case 5:
          setOtp5(value);
          otp6Ref.current?.focus();
          break;
        case 6:
          setOtp6(value);
          break;
        default:
          break;
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      switch (index) {
        case 1:
          if (!otp1) {
            otp1Ref.current?.focus();
          } else {
            setOtp1("");
          }
          break;
        case 2:
          if (!otp2) {
            otp1Ref.current?.focus();
          } else {
            setOtp2("");
          }
          break;
        case 3:
          if (!otp3) {
            otp2Ref.current?.focus();
          } else {
            setOtp3("");
          }
          break;
        case 4:
          if (!otp4) {
            otp3Ref.current?.focus();
          } else {
            setOtp4("");
          }
          break;
        case 5:
          if (!otp5) {
            otp4Ref.current?.focus();
          } else {
            setOtp5("");
          }
          break;
        case 6:
          if (!otp6) {
            otp5Ref.current?.focus();
          } else {
            setOtp6("");
          }
          break;
        default:
          break;
      }
    }
  };
 
  const submit = e => {
    e.preventDefault();
    const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
    if(otp.length < 6) {
      toast.warning("Please enter 6 digit otp");
    } else if(otp.trim() === "") {
      toast.warning("Please enter 6 digit otp");
    } else {
      localStorage.setItem('cypress', 'home');
      navigate('/home', {state: "OTP verified"});
    }
  };

  if(!location.state) {
    return;
  };

  return (
    <form className='form-container' onSubmit={submit}>
      <ToastContainer />
      <h4>Enter your OTP</h4>

      <div className='otp-box'>
        <input
          className="otp-input"
          type='text'
          placeholder='0'
          onChange={e => handleInputChange(e, 1)}
          maxLength={1}
          ref={otp1Ref}
          onKeyDown={(e) => handleKeyDown(e, 1)}
          name="otp1"
        />
        <input
          className="otp-input"
          type='text'
          placeholder='0'
          onChange={e => handleInputChange(e, 2)}
          onKeyDown={(e) => handleKeyDown(e, 2)}
          maxLength={1}
          ref={otp2Ref}
          name="otp2"
        />
        <input
          className="otp-input"
          type='text'
          placeholder='0'
          onChange={e => handleInputChange(e, 3)}
          onKeyDown={(e) => handleKeyDown(e, 3)}
          maxLength={1}
          ref={otp3Ref}
          name="otp3"
        />
        <input
          className="otp-input"
          type='text'
          placeholder='0'
          onChange={e => handleInputChange(e, 4)}
          onKeyDown={(e) => handleKeyDown(e, 4)}
          maxLength={1}
          ref={otp4Ref}
          name="otp4"
        />
        <input
          className="otp-input"
          type='text'
          placeholder='0'
          onChange={e => handleInputChange(e, 5)}
          onKeyDown={(e) => handleKeyDown(e, 5)}
          maxLength={1}
          ref={otp5Ref}
          name="otp5"
        />
        <input
          className="otp-input"
          type='text'
          placeholder='0'
          onChange={e => handleInputChange(e, 6)}
          onKeyDown={(e) => handleKeyDown(e, 6)}
          maxLength={1}
          ref={otp6Ref}
          name="otp6"
        />
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
};

export default Otp;
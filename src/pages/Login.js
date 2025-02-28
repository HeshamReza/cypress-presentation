import React, { useEffect, useState } from 'react';
import './styles.css';
import { Eye, EyeOff } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  const submit = e => {
    e.preventDefault();
    if(
      email === "" || email.trim() === ""
      || password === "" || password.trim() === ""
    ) {
      toast.warning("Email or password cannot be empty.");
    } else if(password.length < 8) {
      toast.warning("Password must be equal or more then 8 characters.");
    } else {
      navigate('/otp', {state: {email, password}});
    }
  };

  return (
    <form className='form-container' onSubmit={submit}>
      <ToastContainer />
      <h4>Log in to your account</h4>
      <div className='input-container'>
        <label>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Enter your email address'
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className='input-container'>
        <label>Password</label>
        <input
          type={passwordType}
          name='password'
          placeholder='Enter your email address'
          className='password-input'
          required
          minLength={8}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {
          passwordType === "password"
          ? <Eye data-testid="show-password" className='password-toggle-button' onClick={() => {setPasswordType("text")}} />
          : <EyeOff data-testid="hide-password" className='password-toggle-button' onClick={() => {setPasswordType("password")}} />
        }
      </div>

      <button type='submit'>Log In</button>
    </form>
  )
};

export default Login;
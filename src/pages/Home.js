import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './styles.css';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(localStorage.getItem('cypress') !== "home") {
      navigate('/login');
    }
  }, [localStorage.getItem('cypress')]);

  useEffect(() => {
    if(location.state) {
      toast.success("OTP verified");
    }
  }, [location.state]);

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  }

  if(localStorage.getItem('cypress') !== "home") {
    return;
  }
  return (
    <>
      <ToastContainer />
      <div className='home-container'>
        <h1>Home</h1>
        <button type='button' data-testid="logout" onClick={() => {logOut()}}>Log Out</button>
      </div>
    </>
  )
};

export default Home;
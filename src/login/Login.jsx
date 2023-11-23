import React from 'react'

import { useNavigate } from 'react-router-dom';

const buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded";

export default function Login() {

    let navigate = useNavigate();
    
    const handleLogin = () =>{
        navigate('/login');
    }

  return (
    <>
    <button 
        onClick={handleLogin}
        className={buttonStyle}  >
          Login
    </button>
    </>
  )
}


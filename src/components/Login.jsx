import './Login.css'
// import Lottie from 'lottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const nav = useNavigate();
    return(
        <div className='container'>
        <>
        <div className='animation'>
        <DotLottieReact
      src="/login.json"  // Path to the .lottie file in the public folder
      loop
      autoplay
    />
        </div>
            <div className='input'>

                <h1>Login</h1>
                <input type="text" placeholder='Enter mail/mobile'/>
                <input type="password" placeholder='Enter password'/>
                <button>Login</button>
                <div className='forget'>
                <p className="link-button"> forget password</p>
                <p>?</p>
                <p style={{cursor:'pointer'}} onClick={()=>nav("/signup")}>New user</p>
                </div>

            </div>

        </>
        </div>
    )
}

export default Login;
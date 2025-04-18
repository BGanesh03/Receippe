import './signup.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';
import Login from './Login';
import { useNavigate, Link } from 'react-router-dom';

function Signup(){
    const nav = useNavigate();

    return(
        <div className='container'>
        <>
        <div className='animation'>
        <DotLottieReact
      src="/signup.json"  // Path to the .lottie file in the public folder
      loop
      autoplay
    />
        </div>
            <div className='input'>

                <h1>Sign Up</h1>
                <input type="text" placeholder='Enter your name '/>
                <input type="text" placeholder='Enter mail/mobile'/>
                <input type="password" placeholder='Enter password'/>
                <button>Signup</button>
                <div className='forget'>
                    {/* <Link to={'/login'}>Existing</Link> */}
                <p className="link-button" onClick={()=>nav("/login") }>existing user</p>
                </div>

            </div>

        </>
        </div>
    )
}

export default Signup;
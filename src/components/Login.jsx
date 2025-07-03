import './Login.css'
// import Lottie from 'lottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const nav = useNavigate();
    const [mail , setMail] = useState("");
    const [pw , setPw] = useState("");

    const apiurl = "http://localhost:8080/profile"

    const handleLogin = (e) => {
  e.preventDefault();

  if (mail.trim() !== "" && pw.trim() !== "") {
    fetch(apiurl + "/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ mail, pw })
    })
      .then(async (res) => {
        const text = await res.text();
        if (res.ok) {
          alert("Login successful");
          console.log(text); // in case it's profile data or message
          nav("/home");
        } else {
          throw new Error(text);
        }
      })
      .catch((err) => {
        alert("Login Failed: " + err.message);
      });
  } else {
    alert("Email and password are required.");
  }
};


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
                <input type="text" 
                placeholder='Enter mail/mobile'
                value= {mail}
                onChange={(e)=>{setMail(e.target.value)}}/>
                <input type="password" 
                placeholder='Enter password'
                value= {pw}
                onChange={(e)=>{setPw(e.target.value)}}
                />
                <button onClick={handleLogin}>Login</button>
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
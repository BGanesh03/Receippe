import './signup.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [pw, setPw] = useState("");
    const [msg, setMsg] = useState("");

    const apiurl = "http://localhost:8080/profile";
    const nav = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        if (name.trim() !== "" && mail.trim() !== "" && pw.trim() !== "") {
            fetch(apiurl + "/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, mail, pw })
            }).then((res) => {
                if (res.ok) {
                    return res.text(); // gets "Signup successful" from backend
                }
                throw new Error("Signup failed");
            }).then((data) => {
                setMsg(data);
                setName("");
                setMail("");
                setPw("");
                setTimeout(() => {
                    setMsg("");
                    nav("/"); // redirect to login page
                }, 2000);
            }).catch((err) => {
                setMsg(err.message);
            });
        } else {
            setMsg("All fields are required.");
        }
    };

    return (
        <div className='container'>
            <div className='animation'>
                <DotLottieReact src="/signup.json" loop autoplay />
            </div>
            <div className='input'>
                <h1>Sign Up</h1>
                <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Enter email' value={mail} onChange={(e) => setMail(e.target.value)} />
                <input type="password" placeholder='Enter password' value={pw} onChange={(e) => setPw(e.target.value)} />
                <button onClick={handlesubmit}>Signup</button>
                <div className='forget'>
                    <p className="link-button" onClick={() => nav("/")}>Existing user</p>
                </div>
                <p>{msg}</p>
            </div>
        </div>
    );
}

export default Signup;

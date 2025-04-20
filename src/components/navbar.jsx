import './navbar.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dash from './dashb';

function Navbar() {
    const nav = useNavigate();
    const [showDash, setShowDash] = useState(false);

    const toggle = () => {
        setShowDash(!showDash);
    };


    return (
        <>
            <div className="header">
                <h1>MealMates</h1>
                <img
                    id="img"
                    src="./user.png"
                    alt="User"
                    onClick={toggle}
                    className="clickable-icon"
                />
                <Dash visible={showDash} />
            </div>
        </>
    );
}

export default Navbar;

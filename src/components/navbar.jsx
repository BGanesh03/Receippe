import './navbar.css'
import React, { use } from "react";
import { useNavigate } from "react-router-dom";
function Navbar(){
    // const nav = useNavigate();
    return(
        <>
            <div className="header">
            <h1>MealMates</h1>
                <img id="img" src="./user.png" />
                {/* <ol>Profile</ol>
                <ul></ul> */}
            </div>
        </>
    )
}

export default Navbar;
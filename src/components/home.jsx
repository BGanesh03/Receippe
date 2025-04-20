import './home.css'
import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar';
import Feed from './feed';
import Dash from './dashb';

function Home(){
   
    return(
        <div  style={{backgroundImage:"url('back1.jpg')",backgroundSize: "cover", /* Make image cover the whole page */
            backgroundPosition: "center", /* Center the image */
            backgroundRepeat : "no-repeat",
            objectFit:"cover"}}>
            <Navbar/>
            <div className='search' >
                <input type="text" placeholder='Search Receipes....'/>
                {/* <i class=""></i> */}
            </div>
            <div className='feed'>
            <Feed/>
            <Feed/>
            <Feed/>
            <Feed/>

            </div>
            
            <div className="">

            </div>
        </div>
    )
}

export default Home;
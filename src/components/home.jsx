import './home.css'
import React, { use, useEffect, useState } from "react";
import Navbar from './navbar';
import Feed from './feed';
import Dash from './dashb';

function Home(){
  const [receipe , setReceipe] = useState([]);
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [image, setImage] = useState();
  const [steps, setSteps] = useState("");
  const [msg, setMsg] = useState("");

  const apiurl = "http://localhost:8080";


  useEffect(()=>{
    fetch(apiurl+"/receipes")
        .then((res)=> res.json())
        .then((res)=>{
            setReceipe(res)
        })
  },[])
  
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
            
            </div>
            
            <div className="">
            {receipe.map((item, index) => (
  <Feed 
    key={index}
    dish={item.name}
    ingredient={item.ingredient.split(" ")}  // turn space-separated string into array
    instruction={item.steps}
  />
))}
            </div>
        </div>
    )
}

export default Home;
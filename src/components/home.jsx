import './home.css'
import React, { use } from "react";
import Navbar from './navbar';
import Feed from './feed';
import Dash from './dashb';

function Home(){

    const p =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas at pariatur sunt" +
    "nihil asperiores dolorum iusto laudantium! Obcaecati eum non voluptates accusantium laboriosam officiis" +
    "autem eius, asperiores impedit eos fugit provident adipisci! Ab repellendus provident ipsum? Est quas nos" +
    "trum quae exercitationem nisi illum, perferendis tempore reiciendis dolor, repellat doloremque" +
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas at pariatur sunt" +
    "nihil asperiores dolorum iusto laudantium! Obcaecati eum non voluptates accusantium laboriosam officiis" +
    "autem eius, asperiores impedit eos fugit provident adipisci! Ab repellendus provident ipsum? Est quas nos" +
    "trum quae exercitationem nisi illum, perferendis tempore reiciendis dolor, repellat doloremque" +
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptas at pariatur sunt" +
    "nihil asperiores dolorum iusto laudantium! Obcaecati eum non voluptates accusantium laboriosam officiis" +
    "autem eius, asperiores impedit eos fugit provident adipisci! Ab repellendus provident ipsum? Est quas nos" +
    "trum quae exercitationem nisi illum, perferendis tempore reiciendis dolor, repellat doloremque";

  const arr = [
    "masala",
    "vegetable",
    "rice",
    "oil",
    "chicken",
    "pepper",
    "salt",
    "turmeric",
    "onion",
    "garlic",
    "ginger",
    "tomato",
    "potato",
    "paneer",
    "ghee",
    "coriander",
    "green chili",
    "mustard seeds",
    "cumin",
    "curd",
  ];

  const name = "Mr.dot";

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
            <Feed 
            dish={name}
            ingredient={arr}
            instruction={p}
            />
            <Feed 
            dish={name}
            ingredient={arr}
            instruction={p}
            />
            <Feed 
            dish={name}
            ingredient={arr}
            instruction={p}
            />
            </div>
            
            <div className="">

            </div>
        </div>
    )
}

export default Home;
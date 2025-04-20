import { use, useState } from "react";
import "./addr.css";
import { CircleX } from "lucide-react";

export default function Add({ visible1 , setVisible1}) {

    const [name , setName ] = useState("");
    const [ingredient , setIngredient ] = useState("");
    const[image , setImage] = useState();
    const[steps , setSteps] = useState("");

  if (!visible1) return null; // don't render anything if not visible

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file selected
    setImage(file);  // Store the file in the state
  };

  const handlesubmit =(e)=>{
    e.preventDefault();

    const ingredientArray = ingredient.split(" "); 

    console.log("Recipe Name:", name);
    console.log("Ingredients:", ingredientArray);
    console.log("Steps:", steps);
    console.log("Image:", image);

    setName("");
    setIngredient("");
    setImage(null);
    setSteps("");

    setVisible1(false)

  }
  return (
    <>
      <div className="add">
        <CircleX className="circle" onClick={()=>{setVisible1(false)}}/>

        <h2>Add Receipe Name and Cooking Instructions</h2>

        <input className="receipe"
         type="text"
         value={name}
         onChange={(e)=> setName(e.target.value)}
         placeholder="Enter the Receipe Name" />

        <input className="inredient" 
        type="text"
        value={ingredient}
        onChange={(e)=> setIngredient(e.target.value)}
        placeholder="Enter the Ingredients" />

        <input className="ima"
         type="file"
         value={image}
         onChange={handleImageChange}
         placeholder="Enter the Receipe Image" />

        <input className="step" 
        type="text"
        value={steps}
         onChange={(e)=> setSteps(e.target.value)}
        placeholder="Enter the steps" />

        <button onClick={handlesubmit} className="buttonadd" type="submit">Add Receipe</button>
      </div>
    </>
  );
}

import { useState } from "react";
import "./addr.css";
import { CircleX } from "lucide-react";

export default function Add({ visible1, setVisible1 }) {
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [image, setImage] = useState();
  const [steps, setSteps] = useState("");
  const [msg, setMsg] = useState(""); // ✅ Added

  if (!visible1) return null; // don't render anything if not visible

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file selected
    setImage(file); // Store the file in the state
  };

  const apiurl = "http://localhost:8080";

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log("Recipe Name:", name);
    console.log("Ingredients:", ingredient);
    console.log("Steps:", steps);
    console.log("Image:", image);

    if (name.trim() !== "" && ingredient.trim() !== "" && steps.trim() !== "") {
      fetch(apiurl + "/receipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, ingredient, steps })
      })
        .then((res) => {
          if (res.ok) {
            return res.text(); // gets "Signup successful" from backend
          }
          throw new Error("Upload failed");
        })
        .then((data) => {
          setMsg(data);
          setName("");
          setIngredient("");
          setSteps("");
          setTimeout(() => {
            setMsg("");
            setVisible1(false);
          }, 500);
        })
        .catch((err) => {
          setMsg(err.message);
        });
    } else {
      setMsg("All fields are required.");
    }
  };

  return (
    <>
      <div className="add">
        <CircleX className="circle" onClick={() => setVisible1(false)} />

        <h2>Add Receipe Name and Cooking Instructions</h2>

        <input
          className="receipe"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the Receipe Name"
        />

        <input
          className="inredient"
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          placeholder="Enter the Ingredients"
        />

        <input
          className="ima"
          type="file"
          onChange={handleImageChange} // ✅ Fixed: Removed value
          placeholder="Enter the Receipe Image"
        />

        <input
          className="step"
          type="text"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Enter the steps"
        />

        <button onClick={handlesubmit} className="buttonadd" type="submit">
          Add Receipe
        </button>

        {msg && <p className="msg">{msg}</p>}
      </div>
    </>
  );
}

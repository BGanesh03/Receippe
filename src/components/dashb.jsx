import "./dashb.css";
import React from "react";
import { useState } from "react";
import Add from "./addr";
import { useNavigate } from "react-router-dom";

export default function Dash({ visible }) {
    const nav = useNavigate();
  const [showAdd, setShowAdd] = useState(false);

  const toggle =()=>{
    setShowAdd(!showAdd)
  }

  if (!visible) return null; // don't render anything if not visible

  return (
    <div className="dash">
      <ul>
        <li>About</li>
        <li>User Profile</li>
        <li onClick={toggle}>Add Receipe</li>
        <Add visible1={showAdd}  setVisible1={setShowAdd}/>
        <li>Log Out</li>
      </ul>
    </div>
  );
}

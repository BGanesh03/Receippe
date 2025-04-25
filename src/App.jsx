import "./App.css";
import Signup from "./components/signup";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";


function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;

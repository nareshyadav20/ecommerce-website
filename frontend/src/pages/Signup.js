import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

async function signup(){

try{

await axios.post("http://localhost:5000/api/auth/signup",{

name,
email,
password

});

alert("Signup successful");

navigate("/login");

}catch(err){

alert("Signup failed");

}

}

return(

<div className="auth">

<h2>Signup</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={signup}>
Signup
</button>

</div>

);

}

export default Signup;
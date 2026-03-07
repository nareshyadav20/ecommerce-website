import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const login = async()=>{

try{

const res = await axios.post(
"http://localhost:5000/api/auth/login",
{email,password}
);

// SAVE TOKEN
localStorage.setItem("token", res.data.token);

// SAVE USER
localStorage.setItem("user", JSON.stringify(res.data.user));

alert("Login success");

// redirect to homepage
navigate("/");

}catch(err){

alert("Login failed");

}

};

return(

<div className="auth">

<h2>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={login}>
Login
</button>

</div>

);

}

export default Login;
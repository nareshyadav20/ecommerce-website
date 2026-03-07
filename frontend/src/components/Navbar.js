import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

const user = JSON.parse(localStorage.getItem("user"));

function logout(){
localStorage.removeItem("token");
localStorage.removeItem("user");
window.location.reload();
}

return(

<div className="navbar">

<h2 className="logo">ShopKart</h2>

<input
className="search"
placeholder="Search for products"
/>

<div className="navLinks">

<Link to="/">Home</Link>
<Link to="/cart">Cart</Link>
<Link to="/wishlist">Wishlist</Link>

{user ? (

<>
<span className="profile">👤 {user.name}</span>
<button className="logoutBtn" onClick={logout}>Logout</button>
</>

) : (

<>
<Link to="/login">Login</Link>
<Link to="/signup">Signup</Link>
</>

)}

</div>

</div>

);

}

export default Navbar;
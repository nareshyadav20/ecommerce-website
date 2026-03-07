import React,{useEffect,useState} from "react";

function Wishlist(){

const [wishlist,setWishlist] = useState([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("wishlist")) || [];

setWishlist(data);

},[]);

return(

<div>

<h2>Wishlist</h2>

{wishlist.map((p,i)=>(

<div key={i}>

<img src={p.image} width="80"/>
<h3>{p.name}</h3>

</div>

))}

</div>

);

}

export default Wishlist;
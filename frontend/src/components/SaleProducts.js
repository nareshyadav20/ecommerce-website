import React, { useEffect, useState } from "react";
import "./sale.css";

function SaleProducts() {

const [products,setProducts] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/api/products")
.then(res=>res.json())
.then(data=>{

// only some products for sale
const saleItems = data.slice(0,8);
setProducts(saleItems);

});

},[]);

return(

<div className="saleSection">

<h2>🔥 50% SALE</h2>

<div className="slider">

{products.map((p,i)=>(
<div className="card" key={i}>

<span className="badge">50% OFF</span>

<img src={p.image} alt="" />

<h4>{p.name}</h4>

<p className="old">₹{p.price}</p>

<p className="new">₹{p.price/2}</p>

</div>
))}

</div>

</div>

);

}

export default SaleProducts;
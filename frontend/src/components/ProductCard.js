import React from "react";

function ProductCard({product,addToCart,addToWishlist}){

return(

<div className="card">

<img src={product.image} alt={product.name}/>

<h3>{product.name}</h3>

<p className="price">₹{product.price}</p>

<div className="rating">
⭐ ⭐ ⭐ ⭐
</div>

<div className="buttons">

<button onClick={()=>addToCart(product)}>
Add Cart
</button>

<button className="wishBtn"
onClick={()=>addToWishlist(product)}>
♡
</button>

</div>

</div>

);

}

export default ProductCard;
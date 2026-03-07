import React, { useState } from "react";

function Cart(){

// LOAD CART FROM LOCAL STORAGE
const [cart,setCart] = useState(
JSON.parse(localStorage.getItem("cart")) || []
);

const [showDialog,setShowDialog] = useState(false);
const [address,setAddress] = useState("");


// INCREASE QUANTITY
function increase(index){

let updated = [...cart];

updated[index].qty += 1;

setCart(updated);

localStorage.setItem("cart",JSON.stringify(updated));

}


// DECREASE QUANTITY
function decrease(index){

let updated = [...cart];

if(updated[index].qty > 1){
updated[index].qty -= 1;
}

setCart(updated);

localStorage.setItem("cart",JSON.stringify(updated));

}


// TOTAL PRICE
const total = cart.reduce(
(sum,item)=> sum + item.price * item.qty,
0
);


// PLACE ORDER
function placeOrder(){

setShowDialog(true);

}


// CONFIRM ORDER
function confirmOrder(){

if(address === ""){
alert("Please enter your address");
return;
}

alert("Order placed successfully!");

localStorage.removeItem("cart");

setCart([]);

setShowDialog(false);

}


// UI
return(

<div className="cartPage">

<h2>Your Cart</h2>

{cart.length === 0 ? (

<h3>Your cart is empty</h3>

) : (

cart.map((item,index)=>(

<div className="cartItem" key={index}>

<img src={item.image} alt="" width="80"/>

<h4>{item.name}</h4>

<p>₹{item.price}</p>

<div className="qty">

<button onClick={()=>decrease(index)}>-</button>

<span>{item.qty}</span>

<button onClick={()=>increase(index)}>+</button>

</div>

</div>

))

)}


<h3>Total: ₹{total}</h3>


<button className="orderBtn" onClick={placeOrder}>
Place Order
</button>


{/* ADDRESS + ORDER DIALOG */}

{showDialog && (

<div className="dialog">

<h3>Enter Delivery Address</h3>

<textarea
placeholder="Enter your address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

<h4>Total: ₹{total}</h4>

<button onClick={confirmOrder}>
Confirm Order
</button>

<button onClick={()=>setShowDialog(false)}>
Cancel
</button>

</div>

)}

</div>

);

}

export default Cart;
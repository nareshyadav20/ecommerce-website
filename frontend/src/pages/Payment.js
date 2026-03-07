import React from "react";

function Payment(){

function pay(){

alert("Payment Successful!");

window.location="/orders";

}

return(

<div className="paymentPage">

<h2>Select Payment Method</h2>

<button onClick={pay}>💳 Pay with Card</button>

<button onClick={pay}>📱 UPI</button>

<button onClick={pay}>💵 Cash on Delivery</button>

</div>

)

}

export default Payment;
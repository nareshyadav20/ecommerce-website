import React,{useState} from "react";

function Orders(){

const [orders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

return(

<div className="ordersPage">

<h2>Your Orders</h2>

{orders.map((o,i)=>(

<div className="orderCard" key={i}>

<p><b>Date:</b> {o.date}</p>

<p><b>Address:</b> {o.address}</p>

<p><b>Total:</b> ₹{o.total}</p>

</div>

))}

</div>

)

}

export default Orders;
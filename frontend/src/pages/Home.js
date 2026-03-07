import React,{useEffect,useState} from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import "./home.css";

function Home(){

const [products,setProducts] = useState([]);
const [search,setSearch] = useState("");

useEffect(()=>{

axios.get("http://localhost:5000/api/products")
.then(res=>setProducts(res.data))
.catch(err=>console.log(err));

},[]);


// SEARCH FILTER
const filtered = products.filter(p =>
p.name.toLowerCase().includes(search.toLowerCase())
);


// SALE PRODUCTS (duplicate for infinite scroll)
const saleProducts = [...products.slice(0,6), ...products.slice(0,6)];


// ADD TO CART
function addToCart(product){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const exist = cart.find(item => item._id === product._id);

if(exist){
exist.qty += 1;
}else{
cart.push({...product,qty:1});
}

localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart");

}


// ADD TO WISHLIST
function addToWishlist(product){

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const exist = wishlist.find(item => item._id === product._id);

if(!exist){

wishlist.push(product);
localStorage.setItem("wishlist",JSON.stringify(wishlist));
alert("Added to wishlist");

}else{
alert("Already in wishlist");
}

}

return(

<div>

{/* SALE BANNER */}

<div className="banner">

<h1>🔥 Big Sale Today</h1>
<p>Up to 50% OFF</p>

</div>


{/* SALE SLIDER */}

<h2 className="saleTitle">🔥 50% Sale Products</h2>

<div className="saleContainer">

<div className="saleSlider">

{saleProducts.map((p,i)=>(
<div className="saleCard" key={i}>

<img src={p.image} alt="" />

<h4>{p.name}</h4>

<p className="oldPrice">₹{p.price}</p>
<p className="newPrice">₹{p.price/2}</p>

</div>
))}

</div>

</div>


{/* SEARCH BAR */}

<div className="searchBox">

<input
type="text"
placeholder="Search products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>


{/* PRODUCT GRID */}

<div className="products">

{filtered.map(p=>(

<ProductCard
key={p._id}
product={p}
addToCart={addToCart}
addToWishlist={addToWishlist}
/>

))}

</div>

</div>

);

}

export default Home;
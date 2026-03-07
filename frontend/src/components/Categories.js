import React from "react";

function Categories(){

const cats = [
"Mobiles",
"Laptops",
"Cameras",
"Accessories",
"Shoes",
"Watches"
];

return(

<div className="categories">

{cats.map(c=>(

<div className="catItem" key={c}>
{c}
</div>

))}

</div>

)

}

export default Categories;
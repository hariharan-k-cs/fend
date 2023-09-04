import React, {useState } from "react";

const Cart =({adds,dat})=>{
    let [data,setdata] = useState([{}])
    let[click,setclick]=useState(false)
    return(
        <>
        {
          adds.filter((a)=>)
        }
        <h1 className='text-blue-600'>product_name</h1> 
        <button className="bg-blue-500 px-4 rounded-full ml-4">-</button><button className="bg-blue-500 px-4 rounded-full" >+</button>
        <span>Price</span>
        </>
    )
}
export default Cart
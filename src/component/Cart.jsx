import React from "react";

const Cart =({cartproduct,quanti, subquanti,rem})=>{
return(
    <>
        <h1>Cart</h1>
        {
            cartproduct.map((cart)=>{
               return(
                <div key={cart.id} className="flex">
                    <h1>{cart.title}</h1>
                    <button onClick={()=>quanti(cart.id)} className="bg-blue-500 text-white p-2 px-4 m-2">Add</button>
                    <p>{cart.quantity}</p>
                    <button onClick={()=>subquanti(cart.id)} className="bg-blue-500 text-white p-2 px-4 m-2">sub</button>                   
                     <button onClick={()=>rem(cart.id)} className="bg-blue-500 text-white p-2 px-4 m-2">remove</button>

                </div>
               )
            })
        }
    </>
)
}
export default Cart;
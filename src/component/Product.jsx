import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Product=()=>{
    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((res)=>res.json()).then((res)=>setproducts(res.products))
    },[])
    let [products,setproducts]=useState([])
    let [sendcart,setsendcart]=useState([])
    let[plus,setplus]=useState(false)
    let[minus,setminus]=useState(false)
    let[click,setclick]=useState(false)
    function cartdata(data){
        setsendcart([...sendcart,{
            "id":data.id,
            "names":data.title,
            "image":data.images[0],
            "price":data.price,
            "quantity":1}
        ])
           
        setclick(true)
        console.log(sendcart)
    }
    
    // function addquan(id){
    //     setsendcart(pre=>{
    //         let add= pre.map(cart=>{
    //              if(cart.id===id){
    //                  return {...cart,quantity:cart.quantity+1}
    //              }
    //              else{
    //                  return(console.log('not adding'))
    //              }
    //          })
    //          return add
             
    //      })
    // }
    // function minusquan(id){
    //     setsendcart(pre=>{
    //        const one= pre.map(cart=>{
    //             if(cart.id===id){
    //                 return {...cart,quantity:cart.quantity-1}
    //             }
    //         })
    //         return one
    //     })
    //     console.log(id)
    // }
    return(
        <>
            <div className='flex md:flex md:p-2 flex-wrap '>
                {
                products.map((data)=>(
                    <div key={data.id} className='border-2 border-black p-2 m-4 lg:h-[400px] lg:w-[400px] md:h-[250px] md:w-[200px]'>
                        <img className='h-[170px] w-[170px] relative left-[5px] m-2' src={data.images[0]} alt="" />
                        <div className='flex justify-between'>
                            <h1 className='text-xl '>${data.price}</h1>
                        <button className='bg-blue-600 rounded-full text-white text-bold p-1' onClick={()=>cartdata(data)}>add cart</button>
                        </div>
                        
                    </div>
                ))
            }
            </div>
            <Cart datas ={sendcart} clk={click}/>
            
        </>
    )
}

export default Product
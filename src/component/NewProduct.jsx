import React, { useEffect, useState } from "react";
import Cart from './Cart'



const NewProduct=()=>{
    let [data,setdata]=useState([])
    let [cartdata,setcartdata]=useState([{}])
    useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>res.json()).then(res=>setdata(res.products))
},[])

function addcartbutton(id,e){
    e.preventDefault()
    data.filter((product)=>(product.id===id)).map((p)=>{
        setcartdata([...cartdata,{...p,"quantity":1}])
    })
    if(id){
        e.currentTarget.disabled=true
    }
}
function add(id){
    setcartdata(pre=>{
       let one= pre.map((data)=>{
            if(data.id===id){
                return {...data,"quantity":data.quantity+1}
            }
            return data
        })
        return one
    })
}
function sub(id){
    setcartdata(pre=>{
       let one= pre.map((data)=>{
            if(data.id===id){
                return {...data,"quantity":data.quantity-1}
            }
            return data
        })
        return one
    })
}
function remove(id){
   setcartdata((pre)=>pre.filter(data=>(data.id!==id)))
}
    return(
        <>
        <div className="flex flex-wrap">
            {
                data.map((product)=>{
                    
                        return (
                             <div key={product.id} className="padding -4 m-4 border border-black" >
                            <h1 className="uppercase">{product.title}</h1>
                            <img src={product.images[0]} alt="" className="h-[200px] w-[200px]" />
                            <div className="flex m-2">
                                <p className="uppercase ml-2">{product.price}</p>
                                <button  onClick={(e)=>{addcartbutton(product.id,e)}}  className="bg-blue-500 ml-2 text-white p-2 px-4">Add cart</button>
                            </div>
                        </div>
                        )  
                })
            }
        </div>
            <Cart cartproduct={cartdata} quanti={add} subquanti={sub} rem={remove}/>
        </>
    )
}
export default NewProduct
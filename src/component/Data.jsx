// const Data=()=>{
//     let[obj,setobj]=useState([{
//         "id":0,
//         "names":"product_1",
//         "price":200,
//         "quantity":1
//     },
//     {
//         'id':1,
//         "names":"product_2",
//         "price":100,
//         "quantity":1
//     },
// ])
//     let{quantity}=obj
    
//     function addchange(id){
//         setobj(pre=>{
//             const newstate = pre.map((data)=>{
//                 if(data.id===id){
//                     return {...data,quantity:data.quantity+1}
//                 }
//                 return data
//             })
//             return newstate
//         })
        
//     }
//     function minuschange(id){
//         setobj(pre=>{
//             const old = pre.map((data)=>{
//                 if(data.id===id){
//                     return {...data,quantity:data.quantity-1}
//                 }
//                 return data
//             })
//             return old
//         })
// }
//     return(
//         <>
//         {
//             obj.map((d,id)=>{
//                 return(
//                     <>
//                         <button onClick={()=>addchange(id)}>add</button>
//                         <h1 key={d.id}>{d.quantity}</h1>
//                         <button onClick={()=>{minuschange(id)}}>minus</button><br />
//                     </>
//                 )
//             })
//         }
//         </>
//     )
// }
// export default 
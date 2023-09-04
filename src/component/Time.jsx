import React, { useState } from "react";

const Time=()=>{
    let str
    let [hour,sethour] = useState(0)
    let [min,setmint] = useState(0)
    let [sec,setsec] = useState(0)
    function start(){
      str =  setInterval(()=>{
            setsec(pre=>pre+1)
        },1000)
    }
    function stop(){
        clearInterval(str)
        console.log('stop')
    }
    return(
        <>
           <span>{hour} : </span>
           <span>{min} : </span>
           <span>{sec}</span>
           <button className="bg-blue-500 p-2 px-4 text-white m-2"  onClick={start}>Start</button>
            <button className="bg-blue-500 p-2 px-4 text-white m-2" onClick={stop}>stop</button>
        </>
    )
}
export default Time
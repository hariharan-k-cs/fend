import React, { useContext } from "react";
import { Usercontext } from "../App";
import Newcontext from "./Newcontext";

const ContextCon=()=>{
    const context = useContext(Usercontext)
    return(
        <>
            <h1>{JSON.stringify(context)}</h1>
            <Newcontext/>
        </>
    )
}
export default ContextCon
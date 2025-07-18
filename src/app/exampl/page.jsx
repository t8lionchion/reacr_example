"use client"
import { Hero } from "@/components/Hero";
import { useState } from "react";
function Handleclick(){
    const [name,setName]=useState('');
    return(
        <>
            <input type="text" 
            placeholder="請輸入名字"
            value={name}
            onChange={(e)=>{
                setName(e.target.value);
            }}
            />
            <button onClick={()=>{
                alert(`點屁ㄚ${name}`)
            }}>不要點我{name}</button>
        </>
    );
}
export default function sax(){
    return(
        <>
            <Hero title={'Man must explore, and this is exploration at its greatest'} bg={'post-bg'}/>
            <Handleclick />
        </>
    );
}
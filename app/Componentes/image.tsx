"use client";

import { useEffect, useState } from "react";
const card=[
{ id: 1, img: '/c1.jpg', title: 'Freightliner' },
{ id: 2, img: '/c5.jpg', title: 'Kenworth' },
{ id: 3, img: '/c7.jpg', title: 'Volvo' },
]
export default function Image360(){
    const[ active,setActivate]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setActivate((prev)=>(prev+1)% card.length);
        },3000);
        return()=>clearInterval(interval)
    })
return(
    <div className="card-t">
        <div className="scene">
    <div
        className="carousel"
        style={{ transform: `rotateY(${active * -90}deg)` }}
    >
        {card.map((card) => (
        <div className="card" key={card.id}>
            <img src={card.img} alt={card.title} />
            <p>{card.title}</p>
        </div>
        ))}
    </div>
    </div>  
    </div>
    
);

}
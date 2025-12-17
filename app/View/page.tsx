"use client"
import { useEffect, useState } from "react";
import Login from "../Componentes/login";

const images = [
"/c1.jpg",
"/c4.jpg",
"/c6.jpg",
];
export default function ViewLogin(){
    const [current, setCurrent] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
}, []);
    return(
        <div className="page">
            <div className="left">
                <Login/>
            </div> 
            <div className="right"
            style={{
            backgroundImage: `url(${images[current]})`,
            }}
            >
            </div>
            </div>
        
    );

}
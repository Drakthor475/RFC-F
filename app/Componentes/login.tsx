"use client"
import { useRouter } from "next/navigation";

export default function Login(){
    const rute= useRouter();

    return(
        <div className="wrapper">
        <div className="card-switch">
        <label className="switch">
        <input className="toggle" type="checkbox" />
        <span className="slider" />
        <span className="card-side" />
        <div className="flip-card__inner">
        <div className="flip-card__front">
            <div className="title">REFACCIONES CONTINENTAL S.A DE C.V</div>
            <form action="" className="flip-card__form">
            <input
                type="email"
                placeholder="Email"
                name="email"
                className="flip-card__input"
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                className="flip-card__input"
            />
            <button className="flip-card__btn">Ingresar</button>
            </form>
        </div>
        <div className="flip-card__back">
            <div className="title">REFACCIONES CONTINENTAL S.A DE C.V</div>
            <form action="" className="flip-card__form">
            <input
                type="name"
                placeholder="Name"
                className="flip-card__input"
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                className="flip-card__input"
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                className="flip-card__input"
            />
            <button className="flip-card__btn">Guardar</button>
            </form>
        </div>
        </div>
    </label>
    </div>
</div>

);

} 
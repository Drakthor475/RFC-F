"use client"
import { useRouter } from "next/navigation";

export default function Login(){
    const rute= useRouter();

    return(
        <div className="contenedor">
            <header className="title">REFACCIONES CONTINENTAL S.A DE C.V</header>
            <p className="subtitle">Usuario</p>
            <input className="imput " placeholder="Ingrese su correo "></input>
            <p className="subtitle">Contraseña</p>
            <input type="password" className="imput" placeholder="Ingrese su contraseña"></input>
            <button className="btn">Iniciar sesion </button>
            <p className="text-register">¿No tienes cuenta? Registrate primero</p>
            <button className="btn">Registrarse</button>
    </div>
    );

} 
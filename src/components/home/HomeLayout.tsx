import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
            <ul>
                <li><Link to="formulario">Fomrulario</Link></li>
                <li><Link to="perfil">Perfil</Link></li>
            </ul>

            <Outlet/>
        </>
      );    
};

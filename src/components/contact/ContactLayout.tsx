import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Contact() {
    return(
        <>
        <ul>
            <li><Link to="redes">Redes</Link></li>
            <li><Link to="dejaUnMensaje">Deja un mensaje</Link></li>
            <li><Link to="llamame">Llamame</Link></li>
        </ul>

        <Outlet/>
        </>
    )
};

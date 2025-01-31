import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function CasosLayout() {
    return (
        <>
        <ul>
            <li><Link to="clientes">Clientes</Link></li>
            <li><Link to="logros">Logros</Link></li>
            <li><Link to="colaborar">Colaboradores</Link></li>
        </ul>
        <Outlet/>
        </>
    )
};

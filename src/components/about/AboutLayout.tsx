import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function AboutLayout() {
    return (
        <>
        <ul>
            <li><Link to="bio">Bio</Link></li>
            <li><Link to="trabajo">Trabajo</Link></li>
            <li><Link to="tips">Tips</Link></li>
        </ul>

        <Outlet/>
        </>
    )
};

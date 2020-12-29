import React from "react";
import ReactDOM from "react-dom";
import Brand from "./brand";

function NavBar() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <Brand />
            <ul>
                <li><a class="navbar-brand" href="home.html">Home</a></li>
                <li><a class="navbar-brand" href="catalogo.html">Catalogo</a></li>
                <li><a class="navbar-brand" href="contacto.html">Contacto</a></li>
                <li><a class="navbar-brand" href="quienessomos.html">Quienes Somos</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
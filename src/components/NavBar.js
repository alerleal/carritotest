import React from "react";
import ReactDOM from "react-dom";
import Brand from "./Brand";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="nav-wrapper">
            <Brand />
            <CartWidget />
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a  href="home.html">Home</a></li>
                <li><a  href="catalogo.html">Catalogo</a></li>
                <li><a  href="contacto.html">Contacto</a></li>
                <li><a  href="quienessomos.html">Quienes Somos</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
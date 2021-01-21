import React from "react";
import ReactDOM from "react-dom";
import carritobrand from "./img/carritobrand.png"

function Brand() {
    return (
        <a href="/">
        <div class="logo">
         <img class="brand-logo" src={carritobrand} alt="Carritobrand" /> 
         </div>
        </a>
        );
}

export default Brand;
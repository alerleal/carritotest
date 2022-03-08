import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from 'react-router-dom'
import carritobrand from "./img/carritobrand.png"

function Brand() {
    return (
        <NavLink to={`/`} >
        <div class="logo">
         <img class="brand-logo" src={carritobrand} alt="Carritobrand" /> 
         </div>
        
        </NavLink>
        );
}

export default Brand;
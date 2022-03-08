import React from 'react';
import Carro from "./img/carro1.png"
import Cart from "./Cart";
import { Link } from 'react-router-dom';

function CartWidget() {
    return (

        
        <Link to={`/Cart`} className="carro" class="material-icons">
        <img src={Carro}  height="50" width="50"></img>
        </Link>
        

    )
}


export default CartWidget;
import React from 'react';
import Carro from "./img/carro1.png"

function CartWidget() {
    return (

        <a href="/Cart">
            <img id="carroDeCompra" src={Carro} alt="Carro" width="55" height="50" />
        </a>

    )
}


export default CartWidget;
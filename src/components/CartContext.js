import React from 'react'

function CartContext({ pelicula, quantity }) {


    let addItem = (pelicula, quantity) => {


    }

    let removeItem = ({ id }) => {

    }

    let clear = () => {

    }

    let isInCart = (id) => {

    }

    return (
        <div >
            <ul id="ul">
             <li><button id="botonContext" class="waves-effect waves-light btn" onClick={addItem}> Agregar compra</button></li>
             <li><button id="botonContext" class="waves-effect waves-light btn" onClick={removeItem}>Eliminar compra</button></li>
             <li><button id="botonContext" class="waves-effect waves-light btn" onClick={clear}>Limpiar carrito</button></li>
            </ul>
        </div>
    )
}

export default CartContext

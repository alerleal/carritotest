import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext'




const ItemCount = ({ pelicula, stock, initial, id }) => {

    const [contador, setContador] = useState(initial);


    const { addItem } = useContext(CartContext)

   


    const sumarItem = () => {
        if (contador < stock)
            setContador(contador + 1);

    };


    const restarItem = () => {
        if (contador > initial)
            setContador(contador - 1);
    };


    addItem(pelicula, contador, id);

    return (

        <div class="itemCount">

            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={sumarItem}> + </button>
            <p className="ItemCount" >El contador va {contador} </p>
            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={restarItem}> - </button>
            <br />

            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={addItem(pelicula,contador, id)}>agregar</button>

        </div>
    )
};

export default ItemCount;
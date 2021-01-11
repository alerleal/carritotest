import React, { useState } from 'react';




const ItemCount = ({ stock, initial}) => {

    const [contador, setContador] = useState(initial);



    const sumarItem = () => {
        if(contador < stock)
        setContador(contador + 1);

    };


    const restarItem = () => {
        if(contador > initial)
        setContador(contador - 1);
    };

    const agregarItem = () => {
        return (contador);
    }

    return (

        <div >

            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={sumarItem}> + </button>
            <p className="ItemCount" >El contador va {contador} </p>
            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={restarItem}> - </button>
            <br />
            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={agregarItem}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;
import React, { useState } from 'react';




const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);



    const aumentarContador = () => {

        setContador(contador + 1);

    };


    const disminuirContador = () => {
        setContador(contador - 1);
    };

    const agregarItem = () => {
        return (<p></p>);
    }

    return (

        <div >

            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={aumentarContador}> + </button>
            <p className="ItemCount" >El contador va {contador} </p>
            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={disminuirContador}> - </button>
            <br />
            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={agregarItem}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;
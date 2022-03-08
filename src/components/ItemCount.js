import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext'




const ItemCount = ( {id, stock, initial}) => {



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


  


    return (

        <div class="itemCount">

            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={sumarItem}> + </button>
            <p className="ItemCount" >El contador va {contador} </p>
            <button className="ItemCount" type="button" class="btn btn-secondary" onClick={restarItem}> - </button>
            <br />
            { contador > 0 ? <button className="ItemCount" type="button" class="btn btn-secondary" onClick={() => addItem({id, contador})} >Agregar</button> : <p>Eliga la cantidad del producto a llevar</p>


            }


        </div>
    )
};

export default ItemCount;
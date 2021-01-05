import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    return (

        <div>
            <h1 >{props.mensaje}</h1>
            <ItemCount stock="5" initial="5" />
        </div>
    )
}

export default ItemListContainer

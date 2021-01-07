import React from 'react'
import Item from './Item'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    return (

        <div>
            <h1 >{props.mensaje}</h1>
            <ItemList />
            <ItemCount stock="5" initial="0" />
        </div>
    )
}

export default ItemListContainer

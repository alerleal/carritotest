import React, { useEffect, useState } from 'react'
import Item from './Item'



const ItemList = ({ pelicula }) => {
    return (
        <>
            {pelicula.map(peli => <Item id={peli.id} title={peli.title} description={peli.description} price={peli.price} pictureUrl={peli.pictureUrl} />)}
        </>
    )
}

export default ItemList

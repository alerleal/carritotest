import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import '../css/estilo.css'



const ItemListContainer = ({ greeting, pelicula }) => {
    

    return (

        <div className="center">
            <h1>{greeting}</h1>
            <ItemList pelicula={pelicula} />



        </div>
    )
}

export default ItemListContainer

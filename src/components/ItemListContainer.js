import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import '../css/estilo.css'

const ItemListContainer = ({ greeting, pelicula}) => {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        setPeliculas(pelicula)
    })

    return (

        <div className="center">
            <h1>{greeting}</h1>
            <ItemList pelicula={peliculas} />


        </div>
    )
}

export default ItemListContainer

import React, { useState, useEffect } from 'react'
import Item from './Item'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import '../css/estilo.css'

const ItemListContainer = ({ greeting, pelicula }) => {

    const [cadaPelicula, setCadaPelicula] = useState([])

    useEffect(() => {

        let promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(pelicula)
                console.log('cargo pelis')
            }, 2000)
        })

        promesa
            .then(resolve => {
                console.log('Todo Ok')
            })
            .catch(rejected => {
                console.log('Para atras')
            })

    }, [])

    return (

        <div className ="center">
            <h1>{greeting}</h1>
            <ItemList pelicula={pelicula} />
            <ItemCount  stock={10} initial={0} />
            
        </div>
    )
}

export default ItemListContainer

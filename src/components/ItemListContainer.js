import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import '../css/estilo.css'

const ItemListContainer = ({ greeting, pelicula }) => {

    const [cadaPelicula, setCadaPelicula] = useState([])
    const { id } = useParams()


    useEffect(() => {

        let promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(pelicula)
                console.log('Todo Ok')
            }, 2000)
        })

        promesa
            .then(resolve => {
                if (id) {
                    setCadaPelicula(resolve.filter(cadaPelicula => cadaPelicula.category === id))
                } else {
                    setCadaPelicula(resolve)
                }
            })
            .catch(rejected => {
                console.log(rejected)
            })

    }, [id])

    return (

        <div className="center">
            <h1>{greeting}</h1>
            <ItemList pelicula={cadaPelicula} />


        </div>
    )
}

export default ItemListContainer

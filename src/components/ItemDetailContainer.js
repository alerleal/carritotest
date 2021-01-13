import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import '../css/estilo.css'

const ItemDetailContainer = ({ pelicula }) => {

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
                    setCadaPelicula(resolve.filter(cadaPelicula => cadaPelicula.id == id)[0])
                }
            })
            .catch(rejected => {
                console.log(rejected)
            })
    }, [id])

    return (

        <div className="ItemDetailContainer">
            <ItemDetail pelicula={cadaPelicula} />
        </div>
    )
}

export default ItemDetailContainer
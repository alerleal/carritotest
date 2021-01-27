import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import '../css/estilo.css'


const ItemDetailContainer = ({ pelicula }) => {



    const [peliculas, setPeliculas] = useState([]);
    const { id } = useParams()


    useEffect(() => {
        setPeliculas(pelicula)
        
        console.log(pelicula.id)
        if (pelicula.id) {
            setPeliculas(pelicula.filter(pelicula => pelicula.id == id)[0])
            console.log(pelicula.id)
        }

    }, [id])


    return (

        <div className="ItemDetailContainer">
            <ItemDetail pelicula={peliculas} />
        </div>
    )
}

export default ItemDetailContainer
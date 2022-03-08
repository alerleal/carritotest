import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import '../css/estilo.css'





const ItemDetailContainer = ({ pelicula }) => {



    const { id } = useParams()

    const [peli, setPeli] = useState([])


    setPeli(pelicula.filter(item=>item.category===id))


    
    return (

        <div className="ItemDetailContainer">
            <ItemDetail pelicula={peli} />
        </div>
    )
}

export default ItemDetailContainer
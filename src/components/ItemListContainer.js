import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import '../css/estilo.css'
import {firestore} from  '../firebase';


const ItemListContainer = ({ greeting}) => {

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const db = firestore;
        const collection = db.collection("peliculas");
        const query = collection.get()

        query
            .then((resultado) => {
                setPeliculas(resultado.docs.map((peli) => ({
                    id: peli.id,
                    ...peli.data()
                }))     
            )
            })
            .catch(() => {
                console.log("fallo")
            })
        

    }, [peliculas])

    
    return (

        <div className="center">
            <h1>{greeting}</h1>
            <ItemList pelicula={peliculas} />


        </div>
    )
}

export default ItemListContainer

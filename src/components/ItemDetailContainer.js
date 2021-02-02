import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import '../css/estilo.css'
import { firestore } from '../firebase';



const ItemDetailContainer = ({ pelicula }) => {



    const [peliculas, setPeliculas] = useState([]);
    const { id } = useParams()



    useEffect(() => {

        const db = firestore;
        const collection = db.collection("peliculas");
        const query = collection.get()
        const peliArray = []

        query
            .then((resultado) => {
                resultado.forEach(peli => {
                    const pArray = {
                        ...peli.data()
                    }
                    if(id == peli.id){
                        setPeliculas(peli.data())
                    }
                    
                    
                })
            })

            .catch(() => {
                console.log("fallo")
            })

    }, [peliculas])

    

    return (

        <div className="ItemDetailContainer">
            <ItemDetail pelicula={peliculas} />
        </div>
    )
}

export default ItemDetailContainer
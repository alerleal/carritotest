import React, { useEffect, useState } from 'react'
import Item from './Item'
//import peliculasJson from '../components/productos.json'

const pelicula1 = require('../components/img/movies/matrix.jpg')
const pelicula2 = require('../components/img/movies/quintoelemento.jpg')
const pelicula3 = require('../components/img/movies/2001.jpg')
const pelicula4 = require('../components/img/movies/naranja.jpg')



const peliculas = [
    {
        id: "01",
        title: "The Matrix",
        description: "Pelicula en DVD",
        price: 400,
        pictureUrl: pelicula1
    },
    {
        id: "02",
        title: "The Fifth Element",
        description: "Pelicula en DVD",
        price: 450,
        pictureUrl: pelicula2
    },
    {
        id: "03",
        title: "2001: Space Odissey",
        description: "Pelicula en DVD",
        price: 500,
        pictureUrl: pelicula3
    },
    {
        id: "04",
        title: "A Orange Clockwork",
        description: "Pelicula en DVD",
        price: 500,
        pictureUrl: pelicula4
    }
]

const ItemList = () => {

    const [cadaPelicula, setCadaPelicula] = useState([])

    useEffect(() => {

        let promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(peliculas)
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
        <div className="row">
            
            {cadaPelicula.map(item => {
                return (
                    <Item key={cadaPelicula.id} id={cadaPelicula.id} title={cadaPelicula.title} price={cadaPelicula.price} pictureUrl={cadaPelicula.pictureUrl} />
                )
            }
            )
        }
        
       </div>
    )
}

export default ItemList

import React from 'react';
import productos from "./components/productos.json"
import ItemListContainer from './components/ItemListContainer'
import ItemListDetailed from './components/ItemDetailContainer'
import Footer from './Footer';

const Main = ({ }) => {
    return (
        <main >
            <ItemListContainer greeting="Las mejores peliculas!" pelicula={productos} />
            <ItemListDetailed pelicula={productos} />
        </main>

    )
}

export default Main;


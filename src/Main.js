import React from 'react'
import ItemListContainer from './components/ItemListContainer';

const Main = () => {
    return (
        <main className="center">
            
            <ItemListContainer greeting="Proximamente el catalogo aca!" />

            <div className="card">
                <div class="card-header">
                    Carrito Web
            </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>Encontra todo lo que buscas en un solo lugar.</p>
                    </blockquote>
                </div>
            </div>
        </main>
    )
}

export default Main;

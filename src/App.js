import React from "react";
import ReactDOM from "react-dom";
import "./css/bootstrap.min.css";
import "./css/estilo.css";
import Header from "./Header";
import ItemListContainer from "./components/ItemListContainer"
import productos from "./components/productos.json"

function App() {

    


 

    return (
        <>
            <Header />
            <main className="center">

                <ItemListContainer greeting="Las mejores peliculas!" pelicula={productos} />

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
        </>
    );
}

export default App;
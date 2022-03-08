import React, { useEffect, useState } from "react";
import { MongoClient } from 'mongodb'
import { useContext, createContext } from "react";
import "./css/estilo.css";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import CartProvider from './components/CartContext'
import Footer from "./Footer";
import Cart from "./components/Cart";



const App = () => {

    const url = "mongodb://localhost:27017"
    const client = new MongoClient(url)
    const dbName = 'Peliculas'

    const [pelicula, setPelicula] = useState([])

    useEffect(() => {
        getDatos()
        .then(console.log)
        .catch(console.error)
        
    }, [])


    const getDatos = async () => {
        await client.connect()
        console.log('Connected successfully to server')
        const db = client.db(dbName)
        const collection = db.collection('documents')
        setPelicula(collection)
    }

    console.log(pelicula)





    return (
        <CartProvider>

            <BrowserRouter>
                <Header />
                <main class="row">
                    <div className="main">
                        <Switch>

                            <Route path="/" exact>
                                <ItemListContainer greeting="Las mejores peliculas!" pelicula={pelicula} />
                            </Route>

                            <Route path="/category/:id">
                                <ItemListContainer />
                            </Route>

                            <Route path="/idPelicula/:id">
                                <ItemDetailContainer pelicula={pelicula} />
                            </Route>
                            <Route path="/Cart">
                                <Cart />

                            </Route>

                        </Switch>
                    </div>
                </main>
                {/* <Footer /> */}
            </BrowserRouter>
        </CartProvider>


    );
}

export default App;



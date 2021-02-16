import React, { useEffect, useState } from "react";
import { useContext, createContext } from "react";
import ReactDOM from "react-dom";
import "./css/estilo.css";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import CartProvider from './components/CartContext'
import Footer from "./Footer";


const App = () => {



    return (
        <CartProvider>

            <BrowserRouter>
                <Header />
                <main class="row">
                    <div className="main">
                        <Switch>

                            <Route path="/" exact>
                                <ItemListContainer greeting="Las mejores peliculas!" />
                            </Route>

                            <Route path="/category/:id">
                                <ItemListContainer />
                            </Route>

                            <Route path="/idPelicula/:id">
                                <ItemDetailContainer />
                            </Route>
                            <Route path="/Cart">

                            </Route>

                        </Switch>
                    </div>
                </main>
                <Footer />
            </BrowserRouter>
        </CartProvider>


    );
}

export default App;



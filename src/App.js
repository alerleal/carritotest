import React from "react";
import {useContext, createContext} from "react";
import ReactDOM from "react-dom";
import "./css/estilo.css";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Productos from "./components/productos.json"
import ItemListDetailed from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./Footer";
import CartContext from "./components/CartContext";



function App() {


    return (
        <BrowserRouter>
            <Header />
            <main class="row">
                <div className="main">
                    <Switch>

                        <Route path="/" exact>
                            <ItemListContainer greeting="Las mejores peliculas!" pelicula={Productos} />
                        </Route>

                        <Route path="/category/:id">
                            <ItemListContainer />
                        </Route>

                        <Route path="/id/:id">
                            <ItemListDetailed pelicula={Productos} />
                        </Route>
                        <Route path="/CartContext">
                            <CartContext  />
                        </Route>

                    </Switch>
                </div>
           </main>
            <Footer />
        </BrowserRouter>
        

    );
}

export default App;



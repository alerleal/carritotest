import React ,{useEffect,useState} from "react";
import { useContext, createContext } from "react";
import ReactDOM from "react-dom";
import "./css/estilo.css";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Footer from "./Footer";
import CartContext from "./components/CartContext";
import {firestore} from  './firebase';


const App = () => {

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
        <BrowserRouter>
            <Header />
            <main class="row">
                <div className="main">
                    <Switch>

                        <Route path="/" exact>
                            <ItemListContainer greeting="Las mejores peliculas!" pelicula={peliculas} />
                        </Route>

                        <Route path="/category/:id">
                            <ItemListContainer />
                        </Route>

                        <Route path="/id/:id">
                            <ItemDetailContainer pelicula={peliculas}/>
                        </Route>
                        <Route path="/CartContext">
                            <CartContext />
                        </Route>

                    </Switch>
                </div>
            </main>
            <Footer />
        </BrowserRouter>


    );
}

export default App;



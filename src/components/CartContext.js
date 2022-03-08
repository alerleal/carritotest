import react, { useState, useEffect, createContext } from 'react';


export const CartContext = createContext();


const CartProvider = ({ children }) => {



    const [idPelicula, setIdPelicula] = useState([])
    const [arrayPeliculas, setArrayPeliculas] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const addItem = ({ id, contador }) => {

        setIdPelicula([id])
        setCantidad(contador)
    }

    const removeItem = (id) => {

    }

    const isInCart = (id) => {
        const peli = arrayPeliculas.find(p => p.id === id)
        if (peli === undefined) {
            return false
        }
        else {
            return true
        }
    }

    const clear = () => {
        setArrayPeliculas([])
    }


    /* ----------------------- */

    // useEffect(() => {
    //     const db = peliculas;
    //     console.log(peliculas)
    //     const collection = db.collection("peliculas");
    //     const query = collection.get()
    //     query
    //         .then((resultado) => {

    //             setArrayPeliculas(resultado.docs.map((peli) => {
    //                 if (idPelicula == peli.id) {
    //                     (

    //                         {
    //                             id: peli.id,
    //                             ...peli.data()
    //                         }

    //                     )
    //                 }


    //             }
    //             )
    //             )/* setPeliculas */
    //         })
    //         .catch(() => {
    //             console.log("fallo")
    //         })


    // }, [])
    // /* ----------------------- */


    
    return (
        <CartContext.Provider value={{ arrayPeliculas, cantidad, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;
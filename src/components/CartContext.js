import react, { useState, useContext, createContext } from 'react';

export const CartContext = createContext();



export const CartProvider = ({ children }) => {

    const [arrayPeliculas, setArrayPeliculas] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const addItem = ({ id, title, pictureUrl, price, quantity }) => {

        let peliId = id;
        console.log(peliId);
        let peliTitle = title;
        let peliPictureUrl = pictureUrl;
        let peliPrice = price;

        setArrayPeliculas([...arrayPeliculas, { id: peliId, title: peliTitle, pictureUrl: peliPictureUrl, price: peliPrice }])
        setCantidad(quantity)
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

    return (
        <CartContext.Provider value={{ arrayPeliculas, cantidad, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;
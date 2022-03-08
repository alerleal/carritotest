import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from './CartContext'
import { NavLink } from 'react-router-dom'
import Item from './Item'


const Cart = () => {

    const [nombre, setNombre] = useState("")
    const [cel, setCel] = useState("")
    const [email, setEmail] = useState("")


    const { idPelicula, arrayPeliculas, cantidad } = useContext(CartContext);
    let precioFinal = "";


    return (

        <>

            <div className="ItemList">
                {arrayPeliculas.map(pelicula => {
                    return (
                        <div class="row">
                            <div class="col s12 m4">
                                <div class="card">
                                    <div class="card-image">
                                        <img src={pelicula.pictureUrl}></img>
                                    </div>
                                    <div class="card-content">
                                        <h4 class="card-title">{pelicula.title}</h4>
                                        <p>{pelicula.description}</p>
                                        <br />
                                        <p>{pelicula.synopsis}</p>
                                        <br />
                                        <p>Precio: {pelicula.price}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>

            <div className="Cart">
                <div className="center" className="productos">
                </div>

                <h4 className="center">Datos de compra</h4>
                <div class="center align">

                    <form class="col s12">
                        <div class="input-field col s6">
                            <input onChange={e => { setNombre(e.target.value) }} type="text" placeholder="Ingresa tu Nombre:" value={nombre} />
                        </div>
                        <div class="input-field col s6">
                            <input onChange={e => { setCel(e.target.value) }} type="tel" placeholder="Ingresa tu Cel:" value={cel} />
                        </div>
                        <div class="input-field col s6">
                            <input onChange={e => { setEmail(e.target.value) }} type="email" placeholder="Ingresa tu Email:" value={email} />
                        </div>
                    </form>
                    <div className="center">
                        <h4>Precio Final: {precioFinal} </h4>
                        <button class="waves-effect waves-light btn" >Finalizar compra</button>
                        <br />
                        <NavLink to={`/`} class="waves-effect waves-light btn">Seguir comprando..</NavLink>

                    </div>


                </div>
            </div>
        </>
    )

}

export default Cart

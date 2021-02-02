import React, {useState, useEffect} from 'react'


function CartContext({ pelicula, quantity }) {

    const [carrito, setCarrito] = useState([])
    const [nombre, setNombre] = useState("")
    const [cel, setCel] = useState("")
    const [email, setEmail] = useState("")
    
    let addItem = (pelicula, quantity) => {


    }

    let removeItem = ({ id }) => {

    }

    let clear = () => {

    }

    let isInCart = (id) => {

    }

    return (
        <div class="center align">
            <ul id="ul">
             <li><button id="botonContext" class="waves-effect waves-light btn" onClick={()=>setCarrito([])}> Agregar compra</button></li>
             <li><button id="botonContext" class="waves-effect waves-light btn" onClick={removeItem}>Eliminar compra</button></li>
             <li><button id="botonContext" class="waves-effect waves-light btn" onClick={clear}>Limpiar carrito</button></li>
            </ul>

            <h4>Datos de compra</h4>
            <form  class="col s12">
                <div class="input-field col s6">
                    <input onChange={e=>{setNombre(e.target.value)}} type="text" placeholder="Ingresa tu Nombre:" value={nombre}/>
                </div>
                <div class="input-field col s6">
                    <input onChange={e=>{setCel(e.target.value)}} type="tel" placeholder="Ingresa tu Cel:" value={cel}/>
                </div>
                <div class="input-field col s6">
                    <input onChange={e=>{setEmail(e.target.value)}} type="email" placeholder="Ingresa tu Email:" value={email}/>
                </div>

                <button class="waves-effect waves-light btn">Comprar</button>
            </form>
        </div>
    )
}

export default CartContext

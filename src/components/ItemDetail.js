import React from 'react'
import { NavLink} from 'react-router-dom'
import ItemCount from "./ItemCount"

const ItemDetail = ({ pelicula }) => {




    return (

        <div className="mostrarItem">
                    {/* MostrarItem */}

          
            
            <div class="row">
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src={pelicula.pictureUrl}></img>
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">{pelicula.title}</h4>
                            <p>{pelicula.description}</p>
                            <br/>
                            <p>{pelicula.synopsis}</p>
                            <br/>
                            <p>Precio: {pelicula.price}</p>
                        </div>
                    </div>
                </div>

                {/* componente ItemCount */}
                <ItemCount stock={pelicula.stock} initial={0} />
                <br/>
                
                <br />
                <br />
                {/* Boton para volver! */}
                <NavLink to={`/`} class="waves-effect waves-light btn">Volver</NavLink>

                
            </div>



        </div>
    )
}

export default ItemDetail

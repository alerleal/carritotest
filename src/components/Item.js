import React from 'react'
import { NavLink } from 'react-router-dom'
import ItemCount from "./ItemCount"



const Item = ({ id, title, description, price, pictureUrl }) => {




    return (
        <div className="mostrarItem">
            <div class="row">
                <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                            <img src={pictureUrl}></img>
                        </div>
                        <div class="card-content">
                            <h4 class="card-title">{title}</h4>
                            <p>{description}</p>
                            <p>Precio: {price}</p>
                        </div>
                        <div>
                            <p>Ver detalle...</p>
                            <NavLink to={`/idPelicula/${id}`} class="large material-icons">keyboard_arrow_down</NavLink>

                        </div>

                    </div>
                </div>

               
            </div>
        </div>





    )
}

export default Item
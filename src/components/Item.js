import React from 'react'



const Item = ({ id, title, description, price, pictureUrl }) => {


    const verificadorID = ({ id }) => {
        if (id == '01') {
            alert(<div className="item" >
                <p>Detalle pelicula Matrix</p>

            </div>)

        }
        if (id == '02') {
            <div className="item" >
                <p>Detalle pelicula Blade  Runner</p>

            </div>
        }
        if (id == '03') {
            <div className="item" >
                <p>Detalle pelicula 2001: Space Odissey</p>

            </div>
        }
        if (id == '04') {
            <div className="item" >
                <p>Detalle pelicula Orange Clockwork</p>

            </div>
        }
    }

    return (
        <div className="container" >

            <img src={pictureUrl} height="350" width="290" />
            <br />
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">{id}</button>
            <br />
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">{title}</button>
            <br />
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">{description}</button>
            <br />
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">${price}</button>
            <br />
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top" onClick={verificadorID}>Detalle</button>

            
        </div>
                
        
        

    )
}

export default Item
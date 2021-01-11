import React from 'react'



const Item = ({ id, title, description, price, pictureUrl }) => {




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
            <br />

        </div>

    )
}

export default Item
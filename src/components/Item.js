import React from 'react'



const Item = ({ id, title, description, price, pictureUrl }) => {



    return (
        <div className="card" >
            <h1>{title}</h1>
            <img src={pictureUrl}></img>
            <p>{description}</p>
            <p>{price}</p>
        </div>

    )
}

export default Item
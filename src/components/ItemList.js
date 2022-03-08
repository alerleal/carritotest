import React from 'react'
import Item from './Item'
import Loader from './Loader'



const ItemList = ( {pelicula} ) => {




    return (
        <div className="col">
            {pelicula.length > 0
            ? pelicula.map(item=>{
                return (
                    <Item key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
                )
            })
            : <Loader/>}
        </div>
    )
}

export default ItemList

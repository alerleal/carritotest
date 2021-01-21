import React from 'react'

export const peliculaProvider = ({children}) => {
    
    const addItem = () =>{

    }

    const removeItem = () =>{

    }

    const clear = () =>{

    }

    const isInCart = () =>{

    }

    
    return (
        <div>
            <Provider value={addItem, removeItem, clear, isInCart}>

                {children}

            </Provider>
        </div>
    )
}

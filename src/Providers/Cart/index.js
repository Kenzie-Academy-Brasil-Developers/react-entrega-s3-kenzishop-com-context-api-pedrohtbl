import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@kenzieShopContext:cart")) || [])
    
    const addCart = (product) =>{
        const list = JSON.parse(localStorage.getItem("@kenzieShopContext:cart")) || []
        
        list.push(product)
        
        setCart(list) 
        
        localStorage.setItem("@kenzieShopContext:cart", JSON.stringify(list))

    }

    const removeCart = (product) =>{
        const newCart = cart.filter(item => product.id !== item.id)
        
        localStorage.setItem("@kenzieShopContext:cart", JSON.stringify(newCart))
        
        setCart(newCart)
    }


    return(
        <CartContext.Provider value={{addCart,removeCart,cart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>useContext(CartContext)
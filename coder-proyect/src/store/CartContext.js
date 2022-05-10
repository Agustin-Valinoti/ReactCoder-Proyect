import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext()
const useCartContext = () => useContext(CartContext);

export function CCProvider({children}) {
    const [cart, setCart] = useState([])
    
    const addToCart = (item, cant) => {
        const newItem = {...item, cant}
        setCart([...cart, newItem]);
    }

    // const removeToCart = (item) => {
    //     const newCart = [...cart]
    //     const cartFilter = newCart.filter( item => {
    //         return item.id !== id;
    //     })
    //     setCart(cartFilter)
    // }

    const clearCart = (item) => {
        const emptyCart = () => {}
    }
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext
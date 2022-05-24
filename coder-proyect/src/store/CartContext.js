import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext()
const useCartContext = () => useContext(CartContext);

export function CCProvider({children}) {
    const [cart, setCart] = useState([])
    
    const addToCart = (item, cant) => {
        if (intoCart(item.id)) {
           const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                   const copyItem = {...cartItem}
                   copyItem.cant += cant;
                   return copyItem
                }
            })
            setCart(newCart)
        } else {
            const newItem = {...item, cant}
            setCart([...cart, newItem]);
        }
    }

    const intoCart = (id) => {
        return cart.some( cartItem => cartItem.id === id) 
    }
    
    const totalCant = () => {
        let total = 0
        cart.forEach(item => total += item.cant ) 
        return total;
    }

    const removeFromCart = (id) => {
        const newCart = [...cart]
        const cartFilter = newCart.filter( item => {
            return item.id !== id;
        })
        setCart(cartFilter)
    }

    const clearCart = () => {
        const emptyCart = []
        setCart(emptyCart)
    }

    const getTotalPrice = () => {
        let totalPrice = 0
        cart.forEach((item) => ( totalPrice += item.cant * item.price ))
        return totalPrice
    }
    
    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart, totalCant, intoCart, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext
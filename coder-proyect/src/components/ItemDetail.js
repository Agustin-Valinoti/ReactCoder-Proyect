import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter'
import useCartContext from '../store/CartContext'

function ItemDetail({cars}) {
  const [inCart, setInCart] = useState(false)
  const {addToCart} = useCartContext();

  function onAdd(count) {
    setInCart(true)
    addToCart(cars, count)
  }

  return (
    <div className='flex flex-col m-5 p-12 border-2 rounded-lg backdrop-sepia'>
        <div className='pb-5'>
            <h1 className='pb-2 text-2xl'>{cars.brand}</h1>
            <p className='pb-2'>{cars.model}, {cars.year}</p>
            <img className='w-48 pb-2 max-w-xs hover:shadow-lg transition duration-300 ease-in-out'
                 src={cars.img} alt='Product Image' 
                 />
            <h3>USD ${cars.price}</h3>      
        </div>
        {inCart ? 
          <Link className='hover:text-indigo-700' to='/cart'>Ir al Carrito</Link>
           : 
          <ItemCounter onAdd={onAdd} stock={cars.stock} initial={1}/>
        }
    </div>
  )
}

export default ItemDetail
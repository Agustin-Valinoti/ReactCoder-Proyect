import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter'
import useCartContext from '../store/CartContext'
import Spinner from './commonComponents/Spinner'

function ItemDetail({cars}) {
  const {addToCart, intoCart} = useCartContext();

  function onAdd(count) {
    addToCart(cars, count)
  }

  if (cars === undefined) {
    return <Spinner/>
  } else {
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
        {intoCart(cars.id) ? 
          <h3>Agregado al <Link className='hover:text-indigo-700' to='/cart'>CARRITO</Link></h3>
           : 
          <ItemCounter onAdd={onAdd} stock={cars.stock} initial={1}/>
        }
    </div>
  )}
}

export default ItemDetail
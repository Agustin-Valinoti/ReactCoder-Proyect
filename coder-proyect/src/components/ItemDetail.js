import React from 'react'
import ItemCounter from './ItemCounter'

function ItemDetail({cars}) {
  return (
    <div className='flex flex-col m-5 p-12 border-2 rounded-lg backdrop-sepia'>
        <div className='pb-5'>
            <h1 className='pb-2 text-2xl'>{cars.brand}</h1>
            <p className='pb-2'>{cars.model}, {cars.year}</p>
            <img className='w-48 pb-2' src={cars.img} alt='Product Image' />
            <h3>USD ${cars.price}</h3>      
        </div>
        <ItemCounter stock={cars.stock} initial={1}/>
    </div>
  )
}

export default ItemDetail
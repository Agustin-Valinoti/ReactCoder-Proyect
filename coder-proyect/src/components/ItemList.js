import React from 'react'
import Item from './Item'

function ItemList({cars}) {
  return (
    <div className='flex flex-wrap'>
        {cars.map((thisCars) => {
            return (
                <div>
                    <Item car={thisCars} key={thisCars.id} />
                </div>
            )
        })}
    </div>
  )
}

export default ItemList
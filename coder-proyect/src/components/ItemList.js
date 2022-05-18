import React from 'react'
import Spinner from './commonComponents/Spinner'
import Item from './Item'

function ItemList({cars}) {
  if (cars === undefined) {
    return <Spinner/>
  } else {
    return (
      <div className='flex flex-wrap'>
        {cars.map((thisCars) => {
          return (
            <div className='flex place-content-center p-8'>
                    <Item car={thisCars} key={thisCars.id} />
                </div>
            )
          })}
    </div>
  )
}
}

export default ItemList
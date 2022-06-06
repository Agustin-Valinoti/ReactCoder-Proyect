import React from 'react'
import Spinner from './commonComponents/Spinner'
import Item from './Item'

function ItemList({products}) {
  if (products === undefined) {
    return <Spinner/>
  } else {
    return (
      <div className='flex flex-wrap'>
        {products.map((thisProd) => {
          return (
            <div className='flex place-content-center p-8'>
                    <Item product={thisProd} key={thisProd.id} />
                </div>
            )
          })}
    </div>
  )
}
}

export default ItemList
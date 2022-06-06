import { getItem as getProduct } from '../data/dbase'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  
  const [product, setProduct] = useState()
  const {productid} = useParams()

  useEffect(() => {
    getProduct(productid).then(resPromise => {
      setProduct(resPromise)
    })
  },[productid])
  

  return (
    <div className='flex place-content-center mt-32 p-12'>
      <ItemDetail products={product}/>
    </div>
  )
}

export default ItemDetailContainer
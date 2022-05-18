import { getItem as getProduct } from '../data/dbase'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  
  const [car, setCar] = useState()
  const {carid} = useParams()

  useEffect(() => {
    getProduct(carid).then(resPromise => {
      setCar(resPromise)
    })
  },[carid])
  

  return (
    <div className='flex place-content-center mt-32 p-12'>
      <ItemDetail cars={car}/>
    </div>
  )
}

export default ItemDetailContainer
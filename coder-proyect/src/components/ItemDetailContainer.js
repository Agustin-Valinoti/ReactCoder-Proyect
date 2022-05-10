import data from '../data/data.json'
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function getCars (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const carFound = data.find((car) => {
        return Number(id) === car.id
      })
      resolve(carFound)
    }, 1000)
  })
}

function ItemDetailContainer() {
  

  const [car, setCar] = useState([])
  const {carid} = useParams()

  useEffect(() => {
    getCars(carid).then(resPromise => {
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
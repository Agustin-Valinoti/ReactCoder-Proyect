import { useState } from 'react'

function ItemCounter (props) {
  
  const [count, setCount] = useState(props.initial)
    
    function addHandler () {
      if (count < props.stock) {
        setCount(count + 1)
      } 
    }
    
    function restHandler () {
      if (count > props.initial){
        setCount(count - 1)}
    }
    
    function handleClick(){
      props.onAdd(count)
    }

  return (
      <>
    <div className='flex flex-col text-center'>

      <div className='p-2'>        
        <button onClick={restHandler} className='border rounded-md px-1 py-1 hover:bg-amber-800'> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler} className='border rounded-md px-1 py-1 hover:bg-amber-800'> + </button>
      </div>
      <div>
          <button onClick={handleClick} className='border-2 rounded-3xl px-8 py-2 hover:bg-amber-800'> Agrega al Carrito </button>
      </div>

    </div>
      </>
  )
}

export default ItemCounter
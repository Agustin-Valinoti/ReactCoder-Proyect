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
        <button onClick={restHandler} className='btn btn-ghost'> - </button>
        <strong> {count} </strong>
        <button onClick={addHandler} className='btn btn-ghost'> + </button>
      </div>
      <div>
          <button onClick={handleClick} className='btn btn-ghost'> Agrega al Carrito </button>
      </div>

    </div>
      </>
  )
}

export default ItemCounter
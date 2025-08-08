import React from 'react'
type Val={
    listValue:string;
    handleChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
}
function Input({listValue,handleChange}:Val) {
  return (
    <div>
       <input type='text' name='listValue' className='border' value={listValue} onChange={handleChange}/>
    </div>
  )
}

export default Input

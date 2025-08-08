import React, { useState } from 'react'
import Input from './input'

function Todo() {
 const [listValue,setListValue]=useState<string>('')
 const [list,setList]=useState<string[]>([])
 const [editIndex,setEditIndex]=useState<number|null>(null)

 const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

   const value=e.target.value;
    setListValue(value)
   console.log('after',value)
 }

 const handleSubmit=(e:React.FormEvent )=>{
   e.preventDefault();
    if(listValue.trim()==='')return;
    
    if(editIndex!==null){
        const updatedList=[...list]
        updatedList[editIndex]=listValue
        setList(updatedList)
        setEditIndex(null)
        setListValue('')
    }else if(editIndex===null){
         setList(prev=>{
            const updated=[...prev,listValue]
            console.log(updated)
            return updated
        })
       
        setListValue('')
    }
    }
 
    const handleDelete=(index:number)=>{
        setList(list.filter((_,i)=>i!==index))
    }

    const handleEdit=(index:number)=>{
        setEditIndex(index)
        setListValue(list[index])
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input listValue={listValue} handleChange={handleChange}/>
        <button type='submit' >Add</button>
      </form>
      <div>
        {list.map((v,index)=><p key={index}>{v} 
            <button onClick={()=>handleEdit(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            </p>)}
      </div>
    </div>
  )
}

export default Todo

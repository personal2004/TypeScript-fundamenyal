import React, { useState } from 'react'
import { Inputreciver } from './Inputreciver'
import  {InputChangeType} from "../../../types/types"

export const Inputsender = () => {
   const [userName,setuserName]=useState('');
   const handleChange:InputChangeType=(event,e)=>{
    if(event){
        setuserName(event.target.value);
    }
    if(e){
        if(e.key==="Enter")setuserName('');
    }  
 };  
  return (
    <div>
        <Inputreciver
         placeholder='Name'
         value={userName}
         handleChange={handleChange}
        />
    </div>
  )
}


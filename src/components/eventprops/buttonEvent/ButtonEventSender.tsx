import React from 'react'
import { ButtonEventReciver } from './ButtonEventReciver'
import { Console } from 'console';
import { handleClickFunction } from '../../../types/types';

export default function ButtonEventSender() {
 
    const handlefunction:handleClickFunction=(event,id)=>{
     const button=event.target as HTMLButtonElement;
     console.log(button.innerText);
    }

  return (
    <div>
        <ButtonEventReciver handleClick={(event,id)=>handlefunction(event,id)}/>
    </div>
  )
}

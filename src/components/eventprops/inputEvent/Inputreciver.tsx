import React from 'react'
import { inputpropstype } from '../../../types/types'

export const Inputreciver = (props:inputpropstype) => {
  return (
    <div>
        <input 
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event)=>props.handleChange(event,null)}
        onKeyDown={(e)=>props.handleChange(null,e)}
        />
    </div>
  )
}


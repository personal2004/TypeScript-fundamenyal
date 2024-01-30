import React from 'react'
import { buttonrecivertype } from '../../../types/types'

export const ButtonEventReciver=(props:buttonrecivertype)=> {
  return (
    <div>
        <button onClick={(event)=>props.handleClick(event,2)}>Ram</button>
    </div>
  )
}

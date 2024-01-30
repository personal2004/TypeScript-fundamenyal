import React from 'react'
import { ChildrenPropType } from '../../types/types'

export const Receiver=(props:ChildrenPropType)=> {
  return (
    <div>
        <p style={{lineHeight:"2rem"}}>
            Receiver: What did you say?<br></br>
            Sender:{props.children}<br></br>
            Receiver:yeah ! I have got it.
        </p>
        
    </div>


  )
}

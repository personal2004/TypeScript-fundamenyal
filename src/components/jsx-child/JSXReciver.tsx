import React from 'react'
import { JSXType } from '../../types/types'

export const JSXReciver=(props:JSXType)=> {
  return (
    <div>
       <i style={{lineHeight:"4rem"}} >Welcome mam ! It's good to meet you after long day</i><br></br>
       {props.children}
    </div>
  )
}

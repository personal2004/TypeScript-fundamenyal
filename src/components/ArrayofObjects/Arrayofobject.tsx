import React from 'react'
import {ArrrayofObjectstype} from "../../types/types"
export const Arrayofobject=({names}:ArrrayofObjectstype)=>{
  return (
    <div>
      {
        names.map((item,index)=>{
          return(
            <p key={index}>
              <h4 style={{fontFamily:'italic'}}>First Name:{item.first}</h4>
              <h4 style={{fontFamily:'italic'}}>Last Name:{item.last}</h4>  
            </p>
          )  
      })
      }

    </div>
  )
}

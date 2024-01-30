import React from 'react'
import {styleExportType} from "../../types/types"

export const StyleReceiver = (props:styleExportType) => {
  return (
    <div>
       <button style={props.style}>{props.value}</button> 
    </div>
  )
}


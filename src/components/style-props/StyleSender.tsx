import React from 'react'
import { StyleReceiver } from './StyleReceiver'

export const StyleSender = () => {
  return (
    <div>
        <StyleReceiver
        style={{
          padding: '0.5rem 1rem',
          fontSize: '16px',
          backgroundColor: 'green',
          color: 'white',
          border: '1px solid black',
          borderRadius: '3px', 
        }}
        value={'Ram'}
        />
    </div>
  )
}


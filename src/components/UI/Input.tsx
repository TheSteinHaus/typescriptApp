import React from 'react'
import cl from './Input.module.scss'

export default function Input({...props}) {
  return (
    <input 
      {...props}
      className={cl.default_input}
      type='text' 
    />
  )
}

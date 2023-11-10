import React from 'react'
import cl from './Input.module.scss'

export default function Input({...props}) {
  return (
    <input 
      {...props}
      autoComplete='new-password'
      className={cl.default_input}
    />
  )
}

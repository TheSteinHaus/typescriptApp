import React from 'react'
import cl from './TextArea.module.scss'

export default function TextArea({ ...props }) {
  return (
    <textarea
      {...props}
      className={cl.textarea} 
    />
  )
}

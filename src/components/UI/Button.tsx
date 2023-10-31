import React from 'react'
import cl from './Button.module.scss'

interface ButtonText {
    children: string;
}

export default function Button({children} : ButtonText) {
  return (
    <button className={cl.buttonDefault}>{children}</button>
  )
}
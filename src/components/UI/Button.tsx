import React from 'react'
import cl from './Button.module.scss'
import { store } from '../..';

interface ButtonText {
    children: string;
}

export default function Button({children, ...props} : any) {

  return (
    <button {...props} className={cl.button_default}>{children}</button>
  )
}
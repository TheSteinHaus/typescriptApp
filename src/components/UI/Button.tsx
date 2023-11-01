import React from 'react'
import cl from './Button.module.scss'
import { Props } from '../addTaskMenu/AddTaskMenu';

interface ButtonText {
    children: string;
}

export default function Button({children} : ButtonText, onClick : Props) {
  return (
    <button onClick={onClick} className={cl.button_default}>{children}</button>
  )
}
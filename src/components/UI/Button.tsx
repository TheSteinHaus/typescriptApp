import React from 'react'
import cl from './Button.module.scss'
import { store } from '../..';

interface ButtonText {
    children: string;
}

export default function Button({children, onClickFunc} : any) {

  // console.log(store.hidden)
  return (
    <button onClick={onClickFunc} className={cl.button_default}>{children}</button>
  )
}
import React, { useContext, useEffect } from 'react'
import Button from './UI/Button'
import cl from './Header.module.scss'
import { DrawingPinFilledIcon } from '@radix-ui/react-icons'
import { Context } from '..'

export default function Header() {
  const {store} = useContext(Context)

  const onClickFunc = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    store.hidden = !store.hidden
    console.log(store.hidden)
  }

  return (
    <div className={cl.header}>
        <div className={cl.header_text}>COFFEE TODO <DrawingPinFilledIcon className={cl.drawing_pin} /></div>
        <div className={cl.header_button}>
            <Button children={"TODO create"} onClick={onClickFunc} />
        </div>
    </div>
  )
}

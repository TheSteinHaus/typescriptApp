import React from 'react'
import Button from './UI/Button'
import cl from './Header.module.scss'
import { DrawingPinFilledIcon } from '@radix-ui/react-icons'

export default function Header() {
  return (
    <div className={cl.header}>
        <div className={cl.header_text}>COFFEE TODO <DrawingPinFilledIcon className={cl.drawing_pin} /></div>
        <div className={cl.header_button}>
            <Button children={"TODO create"} />
        </div>
    </div>
  )
}

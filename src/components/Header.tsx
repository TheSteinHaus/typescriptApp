import React from 'react'
import Button from './UI/Button'
import cl from './Header.module.scss'
import { DrawingPinFilledIcon } from '@radix-ui/react-icons'

export default function Header() {
  return (
    <div className={cl.header}>
        <div className={cl.headerText}>COFFEE TODO <DrawingPinFilledIcon className={cl.drawingPin} /></div>
        <div className={cl.headerButton}>
            <Button children={"TODO create"} />
        </div>
    </div>
  )
}

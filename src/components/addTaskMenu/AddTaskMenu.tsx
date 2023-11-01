import React, { useContext } from 'react'
import Input from '../UI/Input'

import cl from './AddTaskMenu.module.scss'
import Button from '../UI/Button'
import { Context } from '../..'

export type Props = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function AddTaskMenu() {
  const {store} = useContext(Context)

  function hideChange() {
    store.hidden = !store.hidden
  }

  return (
    <div className={cl.add_task_menu}>
        <div>
            <p>TODO name</p>
            <Input />
        </div>
        
        <div>
            <p>TODO description</p>
            <Input />
        </div>
        
        <Button children='Create' onClick={hideChange} />
    </div>
  )
}

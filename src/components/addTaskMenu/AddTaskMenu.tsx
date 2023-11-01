import React, { FunctionComponent, useContext, useEffect, useState } from 'react'
import Input from '../UI/Input'

import cl from './AddTaskMenu.module.scss'
import Button from '../UI/Button'
import { Context, store } from '../..'
import { observer } from 'mobx-react-lite'

const AddTaskMenu:FunctionComponent = observer(() => {
  const {store} = useContext(Context)

  return (
    <div className={cl.add_task_menu} style={{visibility: store.hidden ? "hidden" : "visible", opacity: store.hidden ? 0 : 1, margin: store.hidden ? "-20px auto" : "-10px auto"}}>
        <div>
            <p>TODO name</p>
            <Input />
        </div>
        
        <div>
            <p>TODO description</p>
            <Input />
        </div>
        
        <Button children='Create' />
    </div>
  )
})

export default AddTaskMenu;
import React, { FunctionComponent, useContext, useEffect, useState } from 'react'
import Input from '../UI/Input'

import todos from '../store/todos'

import cl from './AddTaskMenu.module.scss'
import Button from '../UI/Button'
import { Context, store } from '../..'
import { observer } from 'mobx-react-lite'
import TextArea from '../UI/TextArea'

type TaskMenuProps = {
  toggler: () => void;
}

const AddTaskMenu:FunctionComponent<TaskMenuProps> = observer(({toggler}) => {
  const {store} = useContext(Context)

  function HideTaskCreate() {
    todos.addTask()
    store.hidden = !store.hidden
  }

  return (
    <div className={cl.add_task_menu} style={{visibility: store.hidden ? "hidden" : "visible", opacity: store.hidden ? 0 : 1, margin: store.hidden ? "-20px auto" : "30px auto", height: store.hidden ? "0px" : "200px"}}>
        <div>
            <p>TODO name</p>
            <Input
              value={todos.todoTitle}
              onChange={(e : any) => todos.titleHandler(e.target.value)}
              placeholder='TODO title...'
            />
        </div>
        
        <div>
            <p>TODO description</p>
            <TextArea
              value={todos.todoText}
              onChange={(e : any) => todos.textHandler(e.target.value)}
              placeholder='TODO description...'
            />
        </div>
        
        <Button onClick={HideTaskCreate} children='Create' />
    </div>
  )
})

export default AddTaskMenu;
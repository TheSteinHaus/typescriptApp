import React, { FunctionComponent, useEffect, useState } from 'react'
import cl from './Card.module.scss'
import { Cards } from './types/Cards'
import { CheckCircledIcon, CrossCircledIcon, Pencil2Icon, PlusCircledIcon, TrashIcon } from '@radix-ui/react-icons'
import Button from './UI/Button'
import todos from './store/todos'
import { observer } from 'mobx-react-lite'
import Input from './UI/Input'
import SubCards from './SubCards'

type TodoItemProps = {
  tasks: Cards;
};

const Card : FunctionComponent<TodoItemProps> = observer(({tasks}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [isSubTasksShown, setIsSubTasksShown] = useState(false)
  const [isSubTaskAddingMenu, setIsSubTaskAddingMenu] = useState(false)

  // useEffect(() => {
  //   todos.getTasks()
  // }, [])

  function SetIsEdit() {
    setIsEdit(!isEdit)
  }

  function CompleteEdit() {
    todos.editTask(tasks.id)
    setIsEdit(!isEdit)
  }

  function SubTaskAddingMenu() {
    todos.addSubtask(tasks.id)
    setIsSubTaskAddingMenu(!isSubTaskAddingMenu)
  }

  return (
    <div style={{opacity: tasks.isCompleted ? 0.5 : 1, boxShadow: tasks.isCompleted ? "none" : ""}} className={cl.card}>
        {tasks.isCompleted ? 
          <></>
          :
          !isSubTaskAddingMenu ? 
          <div className={cl.add_sub_task}>
            <Button onClick={SubTaskAddingMenu}>
              <PlusCircledIcon />
            </Button>
          </div>
          :
          <div className={cl.subtask_adding_menu}>
            <Button onClick={SubTaskAddingMenu}>
              <CrossCircledIcon />
            </Button>
            <Input 
              value={todos.subTitle}
              onChange={(e : any) => todos.subTitleHandle(e.target.value)}
              placeholder='Sub title...' 
            />
            <Input 
              value={todos.subText}
              onChange={(e : any) => todos.subTextHandle(e.target.value)}
              placeholder='Sub text...' 
            />
            <Button
              children="Add Sub"
              onClick={SubTaskAddingMenu}
              style={{backgroundColor: "#567171", width: "75%", borderRadius: "7px", padding: "8px", margin: "5px auto 0px", fontSize: "20px"}}
            />
          </div>
        }
        <div style={{textDecoration: tasks.isCompleted ? "line-through" : ""}} className={cl.card_title}>{tasks.title}</div>
        {isEdit ?
          <div className={cl.edit_menu}>
            <Input 
              value={todos.editTitle}
              onChange={(e : any) => todos.editTitleHandler(e.target.value)} 
              placeholder='Change title...' 
            />
            <Input
              value={todos.editText}
              onChange={(e : any) => todos.editTextHandler(e.target.value)}
              placeholder='Change body...' 
            />
            <Button onClick={SetIsEdit}>
              <CrossCircledIcon />
            </Button>
            <Button
              onClick={CompleteEdit}
              style={{backgroundColor: "#567171", width: "50%", borderRadius: "7px", padding: "5px", margin: "0 auto", fontSize: "20px"}} children='Edit' 
            />
          </div>
        : 
          <div className={cl.active_icons}>
            {tasks.isCompleted ? 
              <></>
              :
              <Button onClick={SetIsEdit}>
                <Pencil2Icon className={cl.icon_edit} />
              </Button>
            }
            <Button onClick={() => todos.removeTask(tasks.id)}>
              <TrashIcon className={cl.icon_delete} />
            </Button>
            <Button>
              <CheckCircledIcon style={{color: tasks.isCompleted ? "rgb(47, 255, 116)" : ""}} id={tasks.id} onClick={() => todos.completeToggler(tasks.id)} className={cl.icon_complete} />
            </Button>
          </div> 
        }  
        <div style={{textDecoration: tasks.isCompleted ? "line-through" : ""}} className={cl.card_body}>{tasks.body}</div>

        {
          tasks.subCards.length > 0 &&
            <div style={{textDecoration: tasks.isCompleted ? "line-through" : ""}}>
              {tasks.subCards.map(subCard => <SubCards tasks={subCard} key={subCard.id} />)}
            </div>
        }
    </div>
  )
})

export default Card
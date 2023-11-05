import React, { FunctionComponent, useState } from 'react'
import cl from './SubCards.module.scss'
import { Cards } from './types/Cards';
import { observer } from 'mobx-react-lite';
import Button from './UI/Button';
import { CheckCircledIcon, CrossCircledIcon, Pencil2Icon, PlusCircledIcon, TrashIcon } from '@radix-ui/react-icons';
import todos from './store/todos';
import Input from './UI/Input';

type TodoItemProps = {
  tasks: Cards;
};

const SubCards : FunctionComponent<TodoItemProps> = observer(({tasks}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [isSubTaskAddingMenu, setIsSubTaskAddingMenu] = useState(false)

  function SetIsEdit() {
    setIsEdit(!isEdit)
  }

  function SubTaskAddingMenu() {
    todos.addSubtask(tasks.id)
    setIsSubTaskAddingMenu(!isSubTaskAddingMenu)
  }

  return (
    <div style={{textDecoration: tasks.isCompleted ? "line-through" : "", opacity: tasks.isCompleted ? 0.75 : 1}} className={cl.under_cards}>
      <div className={cl.under_cards_title}>
        <span>{tasks.title}</span>
        {!tasks.isCompleted && 
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
        {tasks.isCompleted ? 
          <></>
          :
          !isSubTaskAddingMenu ? 
            <Button onClick={SubTaskAddingMenu}>
              <PlusCircledIcon />
            </Button>
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
      </div>
      <div className={cl.under_cards_body}>{tasks.body}</div>
      {
        tasks.subCards.length > 0 &&
          <div style={{textDecoration: tasks.isCompleted ? "line-through" : ""}}>
            {tasks.subCards.map(subCard => <SubCards tasks={subCard} key={subCard.id} />)}
          </div>
      }
    </div>
  )
})

export default SubCards
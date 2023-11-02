import React, { FunctionComponent } from 'react'
import cl from './Card.module.scss'
import { Cards } from './types/Cards'
import { CheckCircledIcon, Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'
import Button from './UI/Button'
import todos from './store/todos'
import { observer } from 'mobx-react-lite'

type TodoItemProps = {
  todoItem: Cards;
};

const Card = observer(({tasks} : any, {todoItem} : TodoItemProps) => {
  const {id, title, isCompleted, subCards} = todoItem;

  console.log(tasks.underCards)
  return (
    <div className={cl.card}>
        <div className={cl.card_title}>{tasks.title}</div>
        <div className={cl.active_icons}>
          <Button>
            <Pencil2Icon className={cl.icon_edit} />
          </Button>
          <Button id={id} onClick={() => todos.removeTask(id)}>
            <TrashIcon className={cl.icon_delete} />
          </Button>
          <Button>
            <CheckCircledIcon className={cl.icon_complete} />
          </Button>
        </div>
        <div className={cl.card_body}>{tasks.body}</div>
    </div>
  )
})

export default Card
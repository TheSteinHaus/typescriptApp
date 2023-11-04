import React, { FunctionComponent } from 'react'
import cl from './SubCards.module.scss'
import { Cards } from './types/Cards';
import { observer } from 'mobx-react-lite';

type TodoItemProps = {
  tasks: Cards;
};

const SubCards : FunctionComponent<TodoItemProps> = observer(({tasks}) => {
  return (
    <div className={cl.under_cards}>
        <div>{tasks.title}</div>
        <div>{tasks.body}</div>
    </div>
  )
})

export default SubCards
import { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Cards } from './types/Cards';
import todos from './store/todos';

import Card from './Card';

type TodoItemProps = {
  todoItem: Cards;
};

const TodoLogic : FunctionComponent<TodoItemProps> = observer(( {todoItem} ) => {
  const {id, title, isCompleted, subCards} = todoItem;

  return (
    <>
    </>
  );
});

export default TodoLogic;
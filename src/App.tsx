import React from 'react';
import TodoLogic from './components/TodoLogic';

import todos from './components/store/todos';

import Header from './components/Header';
import AddTaskMenu from './components/addTaskMenu/AddTaskMenu';
import { observer } from 'mobx-react-lite';

function App() {
  return (
    <div>
      <Header />
      <AddTaskMenu />
      {todos.todoArray.map(todoItem =>
        <TodoLogic key={todoItem.id} todoItem={todoItem} />
      )}
    </div>
  );
}

export default observer(App);

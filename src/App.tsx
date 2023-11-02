import React, { useState } from 'react';
import TodoLogic from './components/TodoLogic';

import todos from './components/store/todos';

import Header from './components/Header';
import AddTaskMenu from './components/addTaskMenu/AddTaskMenu';
import { observer } from 'mobx-react-lite';

function App() {
  const [isToggle, setIsToggle] = useState(false)

  function Toggler() {
    setIsToggle(isToggle => !isToggle)
  }

  return (
    <div>
      <Header />
      <AddTaskMenu toggler={Toggler} />
      {todos.todoArray.map(todoItem =>
        <TodoLogic key={todoItem.id} todoItem={todoItem} />
      )}
    </div>
  );
}

export default observer(App);

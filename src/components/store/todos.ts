import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import { Cards } from '../types/Cards';
import { recursionFilter, recursionCompleteToggler, recursionSearch, subTaskAdd } from '../utils/utils';

class Todos {
  todoArray:Cards[] = localStorage.todos ? JSON.parse(localStorage.todos) : [];
  activeTask:Cards | null = null;
  todoTitle = '';
  todoText = '';

  constructor() {
    makeAutoObservable(this)
  }

  titleHandler = (str: string) => {
    this.todoTitle = str;
  }

  textHandler = (str: string) => {
    this.todoText = str;
  }

  addTask = () => {
    if (this.todoTitle.trim().length) {
      this.todoArray.push({
        id: uuidv4(),
        title: this.todoTitle,
        body: this.todoText,
        isCompleted: false,
        subCards: [],
      });

      localStorage.setItem('todos', JSON.stringify(this.todoArray));
      this.todoTitle = '';
      this.todoText = '';
    }
  }

  addSubtask = (id: string) => {
    if (this.todoTitle.trim().length) {
      const task = {
        id: uuidv4(),
        title: this.todoTitle,
        body: this.todoText,
        isCompleted: false,
        subCards: [],
      };

      this.todoArray = subTaskAdd(id, this.todoArray, task);
      localStorage.setItem('todos', JSON.stringify(this.todoArray));
      this.todoTitle = '';
      this.todoText = '';
    }
  }

  removeTask = (id: string) => {
    this.todoArray = recursionFilter(id, this.todoArray);
    localStorage.setItem('todos', JSON.stringify(this.todoArray));

    if (!this.todoArray.length) {
      this.activeTask = null;
      localStorage.removeItem('todos');
    }
  }

  completeToggler = (id: string) => {
    this.todoArray = recursionCompleteToggler(id, this.todoArray);
    localStorage.setItem('todos', JSON.stringify(this.todoArray));
  }

  chooseTask = (id: string) => {
    this.activeTask = recursionSearch(id, this.todoArray);
  }
}

const todos = new Todos();

export default todos;
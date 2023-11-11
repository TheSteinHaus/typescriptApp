import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

import { Cards } from '../types/Cards';
import { recursionFilter, recursionCompleteToggler, recursionSearch, subTaskAdd, recursionSearchEditing } from '../utils/utils';
import axios from 'axios';

class Todos {
  todoArray: Cards[] = localStorage.todos ? JSON.parse(localStorage.todos) : [];
  activeTask: Cards | null = null;
  todoTitle = '';
  todoText = '';
  subTitle = '';
  subText = '';
  editTitle = '';
  editText = '';

  constructor() {
    makeAutoObservable(this)
  }

  titleHandler = (str: string) => {
    this.todoTitle = str;
  }

  textHandler = (str: string) => {
    this.todoText = str;
  }

  subTitleHandle = (str: string) => {
    this.subTitle = str;
  }

  subTextHandle = (str: string) => {
    this.subText = str;
  }

  editTitleHandler = (str: string) => {
    this.editTitle = str;
  }

  editTextHandler = (str: string) => {
    this.editText = str;
  }

  getTasks = () => {
    axios.get('localhost:7000/todo/get-todo').then((data) => data.data)
  }

  addTask = () => {
    if (this.todoTitle.trim().length) {
      const todo = {
        id: uuidv4(),
        title: this.todoTitle,
        body: this.todoText,
        isCompleted: false,
        subCards: [],
      }
      this.todoArray.push(todo);

      console.log()
      axios.post('http://localhost:7000/todo/add-todo', todo)
      .then(() => localStorage.setItem('todos', JSON.stringify(this.todoArray)))
      .catch((e) => console.log(e))
      this.todoTitle = '';
      this.todoText = '';
    }
  }

  addSubtask = (id: string) => {
    if (this.subTitle.trim().length) {
      const task = {
        id: uuidv4(),
        title: this.subTitle,
        body: this.subText,
        isCompleted: false,
        subCards: [],
      };

      this.todoArray = subTaskAdd(id, this.todoArray, task);
      localStorage.setItem('todos', JSON.stringify(this.todoArray));
      this.subTitle = '';
      this.subText = '';
    }
  }

  editTask = (id: string) => {
    this.activeTask = recursionSearch(id, this.todoArray)
    if (this.activeTask) {
      this.editTitle !== '' && (this.activeTask.title = this.editTitle)
      this.editText !== '' && (this.activeTask.body = this.editText)
      recursionSearchEditing(id, this.todoArray, this.activeTask)
      localStorage.setItem('todos', JSON.stringify(this.todoArray));
    }
    
    this.editText = ''
    this.editTitle = ''
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
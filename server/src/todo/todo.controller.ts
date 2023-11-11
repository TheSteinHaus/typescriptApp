import { Body, Controller, Post, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService) {}

    @Get('/get-todo')
    getTodo() {
        return this.todoService.getAllTodo();
    }

    @Post('/add-todo')
    addTodo(@Body() todoDto: CreateTodoDto) {
        return this.todoService.addTodo(todoDto)
    }

    @Post('/edit-todo')
    editTodo(@Body() todoDto: CreateTodoDto) {
        return this.todoService.editTodo(todoDto)
    }

    @Post('/delete-todo')
    deleteTodo(@Body() todoDto: CreateTodoDto) {
        return this.todoService.deleteTodo(todoDto)
    }

}

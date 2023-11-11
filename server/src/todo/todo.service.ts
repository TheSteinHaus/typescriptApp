import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {

    constructor(@InjectModel(Todo) private todoRepository: typeof Todo) {}

    async getAllTodo() {
        const todo = await this.todoRepository.findAll({include: {all: true}})
        return todo
    }

    async addTodo(todoDto: CreateTodoDto) {
        const todo = await this.todoRepository.create(todoDto)
        return todo
    }

    async editTodo(todoDto: CreateTodoDto) {
        const todo = await this.todoRepository.update({ title: todoDto.title, body: todoDto.body }, {
            where: {
                id: todoDto.id
            }
        })
        return todo
    }

    async deleteTodo(todoDto: CreateTodoDto){
        const todo = await this.todoRepository.destroy({
            where: {
                id: todoDto.id
            }
        })
        return todo
    }
}

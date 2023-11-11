import { Module, forwardRef } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { HttpModule } from '@nestjs/axios';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './todo.model';

@Module({
    controllers: [TodoController],
    providers: [TodoService],
    imports: [
        HttpModule,
        SequelizeModule.forFeature([Todo])
    ],
    exports: [
        
    ]
})
export class TodoModule {}

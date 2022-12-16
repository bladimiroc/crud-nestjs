import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoItem } from '@entities/TodoItem';

@Module({
  imports: [TypeOrmModule.forFeature([TodoItem])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}

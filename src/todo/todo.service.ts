import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TodoItem } from '@entities/TodoItem';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoItem)
    private todoRepository: Repository<TodoItem>
  ) {}

  async findAll(): Promise<TodoItem[]> {
    return await this.todoRepository.find();
  }

  async find(id: number): Promise<TodoItem> {
    return await this.todoRepository.findOne({
      where: {
        id
      }
    });
  }

  async create(todo: TodoItem): Promise<TodoItem> {
    return await this.todoRepository.save(todo);
  }

  async update(todo: TodoItem): Promise<UpdateResult> {
    return await this.todoRepository.update(todo.id, todo);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }
}
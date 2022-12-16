import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common';
import { TodoItem } from "@entities/TodoItem";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {

  constructor(
    private todoService: TodoService
  ) { }

  @Get()
  async index(): Promise<TodoItem[]> {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<TodoItem> {
    return await this.todoService.find(id);
  }

  @Post()
  async create(@Body() todo: TodoItem): Promise<TodoItem> {
    return await this.todoService.create(todo);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() todo: TodoItem
  ): Promise<any> {
    todo.id = id;
    return await this.todoService.update(todo);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return await this.todoService.delete(id);
  }
}

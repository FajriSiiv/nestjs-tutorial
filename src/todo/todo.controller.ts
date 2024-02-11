import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodoServiceService } from '../todo-service/todo-service.service';

@Controller('api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoServiceService) {}

  @Get()
  findAll(): string[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return this.todoService.findById(parseInt(id));
  }

  @Post()
  create(@Body() todo: string): void {
    this.todoService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() todo: string): void {
    this.todoService.update(parseInt(id), todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.todoService.delete(parseInt(id));
  }
}

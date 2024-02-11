import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoServiceService {
  private todos: string[] = [];

  create(todo: string): void {
    this.todos.push(todo);
  }

  findAll(): string[] {
    return this.todos;
  }

  findById(id: number): string {
    return this.todos[id];
  }

  update(id: number, todo: string): void {
    this.todos[id] = todo;
  }

  delete(id: number): void {
    this.todos.splice(id, 1);
  }
}

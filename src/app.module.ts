import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoServiceService } from './todo-service/todo-service.service';
import { TodoModuleModule } from './todo-module/todo-module.module';

@Module({
  imports: [TodoModuleModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoServiceService],
})
export class AppModule {}

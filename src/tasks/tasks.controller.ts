import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async listTasks(): Promise<Task[]> {
    return await this.tasksService.getAllTasks();
  }

  @Get(':id')
  async showTask(@Param('id') id: number): Promise<Task> {
    return await this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() task: Task): Promise<Task> {
    return await this.tasksService.createTask(task);
  }

  @Put(':id')
  async updateTask(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    return await this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    await this.tasksService.deleteTask(id);
  }
}

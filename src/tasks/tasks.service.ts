import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.model';


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  async getTaskById(id: number): Promise<Task> {
    return await this.tasksRepository.findOne({ where: { id } });
  }

  async createTask(task: Task): Promise<Task> {
    const newTask = this.tasksRepository.create(task);
    return await this.tasksRepository.save(newTask);
  }

  async updateTask(id: number, task: Task): Promise<Task> {
    const existingTask = await this.getTaskById(id);
  
    if (!existingTask) {
      throw new NotFoundException('Task não encontrada');
    }
  
    existingTask.title = task.title;
    existingTask.description = task.description;
    existingTask.completed = task.completed;
  
    return await this.tasksRepository.save(existingTask);
  }
  
  async deleteTask(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}

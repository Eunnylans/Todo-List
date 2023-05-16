import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { throwError } from 'rxjs';
import { NewTask } from './new-task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  addTask(date: Date, newTask: NewTask) {
    throw new Error('Method not implemented.');
  }
  removeTask(date: Date, exisitingTask: TaskItem) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getAllTasks(): TaskItem[]{
    throw new Error('Not Implemented yet')
  }

}

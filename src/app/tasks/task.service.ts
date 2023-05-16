import { Injectable } from '@angular/core';
import { TaskItem } from './task-item.dto';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAllTasks(): TaskItem[]{
    throw new Error('Not Implemented yet')
  }
  
}

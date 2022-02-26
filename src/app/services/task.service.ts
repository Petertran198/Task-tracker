import { Injectable } from '@angular/core';
import { Task } from '../data/Task';
import { TASKS } from '../data/mock-tasks';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // Method fetch task SYNCRONOUSLY
  getTasks(): Task[] {
    return TASKS;
  }
}

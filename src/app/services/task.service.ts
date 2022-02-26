import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../data/Task';
import { TASKS } from '../data/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskItemsUrl = 'http://localhost:5000/tasks'; // URL to web api

  constructor(private http: HttpClient) {}

  // Method fetch task ASYNC USING JSON SERVER
  //Requires type Observable because http.get returns an observable
  getTasks(): Observable<Task[]> {
    //http.get is angular version to fetch async data
    return this.http.get<Task[]>(this.taskItemsUrl);
  }
}

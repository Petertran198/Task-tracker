import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../data/Task';

const httpOptions = {
  headers: new HttpHeaders({
    //Will say that what will be sent will be formatted/outputted to json
    'content-type': 'application/json',
  }),
};

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

  //Method to delete async data using JSON Server
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.taskItemsUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  toggleTaskRemainder(task: Task): Observable<Task> {
    const url = `${this.taskItemsUrl}/${task.id}`;
    //.put requires a url, the updated obj, and httpHeader obj
    return this.http.put<Task>(url, task, httpOptions);
  }
}

import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/data/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // This subscribe method will update and rerun getTask if any data NEW data was added/updated/deleted
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}

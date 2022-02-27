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

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleTask(task: Task) {
    //Update the U.I. part of updating task.reminder
    task.reminder = !task.reminder;
    //Update the task.reminder via server to actually save tasks data
    //subscribe is basically .then of js
    this.taskService.toggleTaskRemainder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe((task) => (this.tasks = [...this.tasks, task]));
  }
}

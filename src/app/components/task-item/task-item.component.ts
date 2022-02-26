import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/data/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  //Props
  @Input() task: Task;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
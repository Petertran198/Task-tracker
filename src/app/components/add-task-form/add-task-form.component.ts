import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/data/Task';
import { TaskUIService } from 'src/app/services/task-ui.service';
@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent implements OnInit {
  @Output() addTaskClick: EventEmitter<Task> = new EventEmitter();
  addTextField: string;
  dayField: string;
  reminder: boolean = false;
  isTaskFormShown: boolean = false;

  constructor(private taskUIService: TaskUIService) {
    //This will allow us to be able to listen to the taskUiService and see if whatever is in OnToggleTask is changed
    this.taskUIService
      .onToggleTask()
      .subscribe(
        (taskShownBoolean) => (this.isTaskFormShown = taskShownBoolean)
      );
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.addTextField) {
      alert('Task field can not be empty');
      return;
    }
    const newTask = {
      text: this.addTextField,
      day: this.dayField,
      reminder: this.reminder,
    };

    // Emit event up to parent to use because we want to save this task in parent component like all other calls to TaskService
    this.addTaskClick.emit(newTask);
    // Clean up form fields
    this.addTextField = '';
    this.dayField = '';
    this.reminder = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Allow us to listen/subscribe to the uiService act accordingly to the data passed
import { Subscription } from 'rxjs';
import { TaskUIService } from 'src/app/services/task-ui.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  isTaskFormShown: boolean = false;
  subscription: Subscription;

  constructor(private taskUiService: TaskUIService, private router: Router) {
    //This will allow us to be able to listen to the taskUiService and see if whatever is in OnToggleTask is changed
    this.subscription = this.taskUiService
      .onToggleTask()
      .subscribe(
        (taskShownBoolean) => (this.isTaskFormShown = taskShownBoolean)
      );
  }

  //Lifecycle method use this when u want ur code to run with application initialize
  ngOnInit(): void {}

  toggleAddTask() {
    this.taskUiService.toggleAddTask();
  }

  isOnHome(route: string) {
    //this.router.url lets us know what page we are on
    return route === this.router.url;
  }
}

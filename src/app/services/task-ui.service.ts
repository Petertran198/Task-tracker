import { Injectable } from '@angular/core';
// Need to import Observable and subject to be able to create a subscription for the child components to "communicate" with each other
// A Subject is a special type of Observable that allows values to be multicasted to many Observers. The subjects are also observers because they can subscribe to another observable and get value from it, which it will multicast to all of its subscribers.
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskUIService {
  private isTaskFormShown: boolean;
  private subject = new Subject<any>();

  constructor() {}

  //Switch boolean results of isTaskShown
  //pass that boolean result to subject to then be used elsewhere
  toggleAddTask() {
    this.isTaskFormShown = !this.isTaskFormShown;
    this.subject.next(this.isTaskFormShown);
  }

  onToggleTask(): Observable<any> {
    // Hide the details of subject and basically only let the "observer" side of subject allowing only the subscribe method to be used.
    //Basically to prevent a leaky abstraction when you don't want people to be able to ".next()" the observable results if u send subject by itself.
    //This method will then be used in other components to listen for change of observable.subscribe
    return this.subject.asObservable();
  }
}

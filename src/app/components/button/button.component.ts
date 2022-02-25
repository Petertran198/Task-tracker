import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  //props-------
  @Input() text: string;
  @Input() color: string;
  //-------
  constructor() {}

  ngOnInit(): void {}

  //Added methods
  addTask() {
    console.log('adding task');
  }
}

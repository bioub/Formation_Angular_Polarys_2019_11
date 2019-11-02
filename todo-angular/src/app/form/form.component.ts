import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  todo = {id: Math.random(), title: '', completed: false};
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

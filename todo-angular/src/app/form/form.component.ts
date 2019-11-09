import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  todo = {id: Math.random(), title: '', completed: false};
  checked = false;
  @Output() add = new EventEmitter();
  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleCheckboxClick(mustChecked) {
    this.checked = mustChecked;
    this.toggle.emit(mustChecked);
  }

  handleSubmit(todo) {
    this.add.emit({...todo});
    this.todo.title = '';
  }
}

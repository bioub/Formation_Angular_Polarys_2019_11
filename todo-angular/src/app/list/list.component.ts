import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: Todo[] = [];
  @Output() delete = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit() {
  }

}

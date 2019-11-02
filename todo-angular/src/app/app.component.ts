import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [{
    id: Math.random(),
    title: 'Pain',
    completed: false
  }, {
    id: Math.random(),
    title: 'Lait',
    completed: true
  }, {
    id: Math.random(),
    title: 'Beurre',
    completed: false
  }];

  onNewTodo(todo) {
    this.todos.push({...todo});
  }
}

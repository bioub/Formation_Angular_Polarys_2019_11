import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{
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

  filterTodos() {
    // if (true) { // Condition si completed est cliqué
    //   return this.todos.filter((t) => t.completed);
    // }

    return this.todos;
  }

  onNewTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleTodos(mustChecked: boolean) {
    for (const todo of this.todos) {
      todo.completed = mustChecked;
    }
  }

  onDeleteTodo(item: Todo) {
    const i = this.todos.indexOf(item);
    this.todos.splice(i, 1);
  }
}


// Exercice
// Créer un service TodoService (à la racine de app)
// Injecter TodoService dans AppComponent
// Injecter HttpClient dans TodoService (pensez au module)
// Ajouter une méthode getAll dans TodoService qui envoit la requête
// GET https://jsonplaceholder.typicode.com/todos
// Dans le ngOnInit de AppComponent, appeler cette méthode getAll
// et ajouter les todos reçues au tableau

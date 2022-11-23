import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    // penyebutan lembutnya adalah CASTING
    const sessionTodos: string = sessionStorage.getItem(TODO) as string;
    if (!sessionTodos) {
      const todos: Todo[] = [
        {
          id: 1,
          name: 'Makan',
          isCompleted: false
        },
        {
          id: 2,
          name: 'Ngoding',
          isCompleted: true
        }
      ]
      // JSON.stringify -> mengubah OBJECT ke STRING
      sessionStorage.setItem(TODO, JSON.stringify(todos));
      this.todos = todos;
    } else {
      // JSON.parse -> mengubah STRING ke OBJECT
      this.todos = JSON.parse(sessionTodos)
    }
  }

  onSaveTodo(todo: Todo): void {
    todo.id = this.todos.length + 1;
    this.todos.push(todo)
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }

  onToggleTodo(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted;
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }

  onDeleteTodo(todo: Todo): void {
    for (let index = 0; index < this.todos.length; index++) {
      if (this.todos[index].id === todo.id) {
        this.todos.splice(index, 1);
      }
    }
    sessionStorage.setItem(TODO, JSON.stringify(this.todos))
  }

}

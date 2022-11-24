import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  private _todo!: Todo;
  isLoading: boolean = true;

  constructor() { }

  get todo(): Todo { return this._todo }
  set todo(todo: Todo) { this.onSaveTodo(todo) }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadTodos();
    }, 1500);
  }

  loadTodos(): void {
    this.isLoading = false;
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
    if (todo.id) {
      this.todos = this.todos.map((t) => {
        if (t.id === todo.id) t = todo;
        return t;
      });
    } else {
      todo.id = this.todos.length + 1;
      this.todos.push(todo)
    }
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

  onEditTodo(todo: Todo): void {
    this._todo = todo;
  }

}

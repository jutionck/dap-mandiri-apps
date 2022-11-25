import { Injectable } from '@angular/core';
import { TODO, Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  constructor() { }

  getAll(): Todo[] {
    const sessionTodos: string = this.storage.getItem(TODO) as string;
    try {
      if (!sessionTodos) {
        const todos: Todo[] = [];
        this.todos = todos;
      } else {
        this.todos = JSON.parse(sessionTodos)
      }
      this.setToStorage();
      return this.todos;
    } catch (err: any) {
      return err.message;
    }
  }

  save(todo: Todo): void {
    try {
      if (todo.id) {
        this.todos = this.todos.map((t) => {
          if (t.id === todo.id) t = todo;
          return t;
        });
      } else {
        todo.id = this.todos.length + 1;
        this.todos.push(todo)
      }
      this.setToStorage();
    } catch (err: any) {
      console.error(err.message);
    }
  }

  get(id: number): Todo {
    try {
      return this.todos.find((t) => t.id === id) as Todo
    } catch (err: any) {
      return err.message;
    }
  }

  remove(id: number): void {
    try {
      for (let index = 0; index < this.todos.length; index++) {
        if (this.todos[index].id === id) {
          this.todos.splice(index, 1);
        }
      }
      this.setToStorage();
    } catch (err: any) {
      console.error(err.message);
    }
  }

  toggle(todo: Todo): void {
    try {
      this.todos.forEach((t) => {
        if (t.id === todo.id) t.isCompleted = !t.isCompleted
        this.setToStorage();
      })
    } catch (err: any) {
      console.error(err.message);
    }
  }

  private setToStorage(): void {
    this.storage.setItem(TODO, JSON.stringify(this.todos));
  }
}

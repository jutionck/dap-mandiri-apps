import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { TODO, Todo } from '../model/todo';
import { ITodoService } from './itodo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements ITodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  constructor() { }

  getAll(): Observable<Todo[]> {
    return new Observable<Todo[]>((observer: Observer<Todo[]>) => {
      try {
        const sessionTodos: string = this.storage.getItem(TODO) as string;
        if (!sessionTodos) {
          const todos: Todo[] = [];
          this.todos = todos;
        } else {
          this.todos = JSON.parse(sessionTodos)
        }
        this.setToStorage();
        return observer.next(this.todos);
      } catch (err: any) {
        return observer.error(err.message)
      }
    })
  }

  save(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        if (todo.id) {
          this.todos = this.todos.map((t) => {
            if (t.id === todo.id) t = todo;
            return t;
          });
        } else {
          todo.id = this.todos.length + 1;
          this.todos.push(todo)
          observer.next();
        }
        this.setToStorage();
      } catch (err: any) {
        observer.error(err.message)
      }
    })
  }

  get(id: number): Observable<Todo> {
    return new Observable<Todo>((observer: Observer<Todo>) => {
      try {
        const todo: Todo = this.todos.find((t) => t.id === id) as Todo;
        observer.next(todo);
      } catch (err: any) {
        observer.error(err.message)
      }
    })
  }

  remove(id: number): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        for (let index = 0; index < this.todos.length; index++) {
          if (this.todos[index].id === id) {
            this.todos.splice(index, 1);
          }
        }
        this.setToStorage();
        observer.next();
      } catch (err: any) {
        observer.error(err.message)
      }
    })
  }

  toggle(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        this.todos.forEach((t) => {
          if (t.id === todo.id) t.isCompleted = !t.isCompleted
          this.setToStorage();
          observer.next();
        })
      } catch (err: any) {
        observer.error(err.message)
      }
    })
  }

  private setToStorage(): void {
    this.storage.setItem(TODO, JSON.stringify(this.todos));
  }
}

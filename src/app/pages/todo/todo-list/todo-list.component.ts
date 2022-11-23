import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  constructor() { }
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  ngOnInit(): void {
  }

  onCheckTodo(todo: Todo): void {
    this.toggleTodo.emit(todo);
  }

  onDeleteTodo(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  onEditTodo(todo: Todo): void {
    this.editTodo.emit(todo);
  }

}

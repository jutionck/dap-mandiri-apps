import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timeout } from 'rxjs';
import { Todo, TodoField } from '../model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit, OnChanges {
  @Input() todo!: Todo;
  @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('TodoFormComponent.todo:', this.todo);
    //   this.setFormValue(this.todo)
    // }, 5000);
  }

  ngOnChanges(): void {
    this.setFormValue(this.todo)
  }

  todoForm: FormGroup = new FormGroup({
    [TodoField.ID]: new FormControl(null),
    [TodoField.NAME]: new FormControl('', [Validators.required, Validators.minLength(3)]),
    [TodoField.IS_COMPLETED]: new FormControl(false),
  });

  onSubmit(): void {
    this.saveTodo.emit(this.todoForm.value);
    this.todoForm.reset();
  }

  setFormValue(todo: Todo): void {
    if (todo) {
      this.todoForm.controls[TodoField.ID]?.setValue(todo.id);
      this.todoForm.controls[TodoField.NAME]?.setValue(todo.name);
      this.todoForm.controls[TodoField.IS_COMPLETED]?.setValue(todo.isCompleted);
    }
  }
}

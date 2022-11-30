export interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
  createdAt: Date
}

export const TODO = 'todos';

export enum TodoField {
  ID = 'id',
  NAME = 'name',
  IS_COMPLETED = 'isCompleted'
}
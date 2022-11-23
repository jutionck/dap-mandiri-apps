export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

export const TODO = 'todos';

export enum TodoField {
  ID = 'id',
  NAME = 'name',
  IS_COMPLETED = 'isCompleted'
}
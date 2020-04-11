import MyTodo  from '../../models/my-todo.model';

export default class MyToDoState {
  myToDos: MyTodo [];
  ToDoError: Error;
}

export const initializeState = (): MyToDoState => {
  return { myToDos: Array<MyTodo>(), ToDoError: null };
};
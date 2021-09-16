import { createAction, props } from '@ngrx/store';
import '../../models/my-todo.model';
import MyTodo from '../../models/my-todo.model';


export const BeginGetMyToDoAction = createAction('[MyToDo] - Begin Get MyToDo');
export const GetMyToDoAction = createAction('[MyToDo] - Get MyToDo');
export const SuccessGetToDoAction = createAction(
  '[MyToDo] - Success Get MyToDo',
  props<{ payload: MyTodo[] }>()
);

export const BeginCreateMyToDoAction = createAction(
  '[MyToDo] - Begin Create MyToDo',
  props<{ payload: MyTodo }>()
);
export const CreateMyToDoAction = createAction(
  '[MyToDo] - Create MyToDo',
  props<MyTodo>()
);
export const SuccessCreateMyToDoAction = createAction(
  '[MyToDo] - Success Create MyToDo',
  props<{ payload: MyTodo }>()
);

export const BeginRemoveMyToDoAction = createAction(
  '[MyToDo] - Begin Remove MyToDo',
  props<{ payload: MyTodo }>()
);
export const RemoveMyToDoAction = createAction(
  '[MyToDo] - Remove MyToDo',
  props<MyTodo>()
);
export const SuccessRemoveMyToDoAction = createAction(
  '[MyToDo] - Success Remove MyToDo',
  props<any>()
);

export const BeginToggleMyToDoAction = createAction(
  '[MyToDo] - Begin Toggle MyToDo',
  props<{ payload: MyTodo }>()
);
export const ToggleMyToDoAction = createAction(
  '[MyToDo] - Toggle MyToDo',
  props<MyTodo>()
);
export const SuccessToggleMyToDoAction = createAction(
  '[MyToDo] - Success Toggle MyToDo',
  props<{ payload: MyTodo }>()
);

export const ErrorMyToDoAction = createAction('[MyToDo] - Error', props<Error>());

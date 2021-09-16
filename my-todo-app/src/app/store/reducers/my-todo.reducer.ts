import { Action, createReducer, on } from '@ngrx/store';
import * as ToDoActions from '../actions/my-todo.action';
import MyTodo from '../../models/my-todo.model';
import MyToDoState, { initializeState } from '../states/my-todo.state';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(ToDoActions.GetMyToDoAction, state => state),
  on(ToDoActions.CreateMyToDoAction, (state: MyToDoState, todo: MyTodo) => {
    return { ...state, myToDos: [...state.myToDos, todo], ToDoError: null };
  }),
  on(ToDoActions.RemoveMyToDoAction, (state: MyToDoState, todo: MyTodo) => {
    return { ...state, myToDos: [...state.myToDos, todo], ToDoError: null };
  }),
  on(ToDoActions.ToggleMyToDoAction, (state: MyToDoState, todo: MyTodo) => {
    return { ...state, myToDos: [...state.myToDos, todo], ToDoError: null };
  }),
  on(ToDoActions.SuccessGetToDoAction, (state: MyToDoState, { payload }) => {
    return { ...state, myToDos: payload, ToDoError: null };
  }),
  on(ToDoActions.SuccessCreateMyToDoAction, (state: MyToDoState, { payload }) => {
    return { ...state, myToDos: [...state.myToDos, payload], ToDoError: null };
  }),
  on(ToDoActions.SuccessRemoveMyToDoAction, (state: MyToDoState, { payload }) => {
    return { ...state, myToDos: [...state.myToDos, payload], ToDoError: null };
  }),
  on(ToDoActions.SuccessToggleMyToDoAction, (state: MyToDoState, { payload }) => {
    return { ...state, myToDos: [...state.myToDos, payload], ToDoError: null };
  }),
  on(ToDoActions.ErrorMyToDoAction, (state: MyToDoState, error: Error) => {
    console.log(error);
    return { ...state, ToDoError: error };
  })
);

export function MyToDoReducer(state: MyToDoState | undefined, action: Action) {
  return reducer(state, action);
}

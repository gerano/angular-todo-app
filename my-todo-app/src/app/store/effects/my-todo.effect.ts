import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ToDoActions from 'src/app/store/actions/my-todo.action';
import MyToDo from 'src/app/models/my-todo.model';
import MyTodoStoreDataService from 'src/app/services/my-todo-store-data.service';

@Injectable()
export class MyToDoEffect {
  constructor(private service: MyTodoStoreDataService, private action$: Actions) {}

  GetMyToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.BeginGetMyToDoAction),
      mergeMap(action =>
        this.service.httpGet().pipe(
          map((data: MyToDo[]) => {
            return ToDoActions.SuccessGetToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorMyToDoAction(error));
          })
        )
      )
    )
  );

  CreateMyToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.BeginCreateMyToDoAction),
      mergeMap(action =>
        this.service
          .httpPost(action.payload)
          .pipe(
            map((data: MyToDo) => {
              return ToDoActions.SuccessCreateMyToDoAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(ToDoActions.ErrorMyToDoAction(error));
            })
          )
      )
    )
  );

  RemoveMyToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.BeginRemoveMyToDoAction),
      mergeMap(action =>
        this.service.httpDelete(action.payload._id).pipe(
          map((data: MyToDo) => {
            return ToDoActions.SuccessRemoveMyToDoAction({ payload: null });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorMyToDoAction(error));
          })
        )
      )
    )
  );

  ToggleCompleteMyToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.BeginToggleMyToDoAction),
      mergeMap(action =>
        this.service.toggleComplete(action.payload).pipe(
          map((data: MyToDo) => {
            return ToDoActions.SuccessToggleMyToDoAction({ payload: null });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorMyToDoAction(error));
          })
        )
      )
    )
  );
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
import MyTodo  from '../models/my-todo.model';
import { Store, select } from '@ngrx/store';
import MyToDoState from '../store/states/my-todo.state';
import {BeginGetMyToDoAction} from '../store/actions/my-todo.action';

@Component({
  selector: 'app-count-my-todos',
  templateUrl: './count-my-todos.component.html',
  styleUrls: ['./count-my-todos.component.css']
})
export class CountMyTodosComponent implements OnInit {

  private myToDosList$: MyTodo[] = [];
  private myTodo$: Observable<MyToDoState>;
  private MyToDoSubscription: Subscription;
  private myToDoError: Error = null;

  // Contructor injection of Service Class
  constructor(private store: Store<{ myTodos: MyToDoState }>) {
  }

  ngOnInit() {
    this.myTodo$ = this.store.pipe(select('myTodos'));

      this.MyToDoSubscription = this.myTodo$
      .pipe(
        map(x => {
          this.myToDosList$ = x.myToDos;
          this.myToDoError = x.ToDoError;
        })
      )
      .subscribe();
    this.store.dispatch(BeginGetMyToDoAction());
  }

  /*ngOnDestroy() {
    if (this.MyToDoSubscription) {
      this.MyToDoSubscription.unsubscribe();
    }
  }*/

  get myTodos() {
    return this.myToDosList$;
  }
}

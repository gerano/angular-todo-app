import { Component, OnInit} from '@angular/core';
import {MyTodoDataService} from '../services/my-todo-data.service';
import MyTodo from '../models/my-todo.model';
import { Store, select } from '@ngrx/store';
import MyToDoState from '../store/states/my-todo.state';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BeginGetMyToDoAction, BeginToggleMyToDoAction } from '../store/actions/my-todo.action';

@Component({
  selector: 'app-outline-my-todos',
  templateUrl: './outline-my-todos.component.html',
  styleUrls: ['./outline-my-todos.component.css'],
})
export class OutlineMyTodosComponent implements OnInit {

  private myToDoList$: MyTodo[] = [];
  private myToDo$: Observable<MyToDoState>;
  private MyToDoSubscription: Subscription;
  private myToDoError: Error = null;

  // Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService, private store: Store<{ myTodos: MyToDoState }>) {
    this.myToDo$ = store.pipe(select('myTodos'));
  }

  ngOnInit() {
    this.MyToDoSubscription = this.myToDo$
      .pipe(
        map(x => {
          this.myToDoList$ = x.myToDos.filter(Boolean);
          this.myToDoError = x.ToDoError;

        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.MyToDoSubscription) {
      this.MyToDoSubscription.unsubscribe();
    }
  }

  get myTodos() {
    console.log('LIST: ' + JSON.stringify(this.myToDoList$));
    return this.myToDoList$;
  }

  toggleComplete(myTodo: MyTodo) {
    this.store.dispatch(BeginToggleMyToDoAction({ payload: myTodo }));
    this.store.dispatch(BeginGetMyToDoAction());
  }
}

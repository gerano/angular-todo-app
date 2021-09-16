import { Component, OnInit } from '@angular/core';
import MyTodo from 'src/app/models/my-todo.model';
import { Store, select } from '@ngrx/store';
import MyToDoState from '../store/states/my-todo.state';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BeginGetMyToDoAction, BeginCreateMyToDoAction } from '../store/actions/my-todo.action';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-new-my-todo',
  templateUrl: './new-my-todo.component.html',
  styleUrls: ['./new-my-todo.component.css'],
})
export class NewMyTodoComponent implements OnInit, OnDestroy {

  public newMyTodo: MyTodo = new MyTodo();
  private myTodo$: Observable<MyToDoState>;
  private myToDosList$: MyTodo[] = [];
  private MyToDoSubscription: Subscription;
  private myToDoError: Error = null;

  // Contructor injection of Service Class
  constructor(private store: Store<{ myTodos: MyToDoState }>) {
    this.myTodo$ = store.pipe(select('myTodos'));
  }

  ngOnInit() {
    this.MyToDoSubscription = this.myTodo$
      .pipe(
        map(x => {
          this.myToDosList$ = x.myToDos;
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

  addTodo() {
    if (!this.newMyTodo.title) {
      return;
    }

    this.store.dispatch(BeginCreateMyToDoAction({ payload: this.newMyTodo }));
    this.store.dispatch(BeginGetMyToDoAction());

    this.newMyTodo = new MyTodo();
    this.newMyTodo.complete = false;
    this.newMyTodo.title = '';
  }
}

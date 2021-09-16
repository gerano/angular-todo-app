import { Component, OnInit, Input } from '@angular/core';
import {MyTodoDataService} from '../services/my-todo-data.service';
import MyTodo from '../models/my-todo.model';
import { Store} from '@ngrx/store';
import MyToDoState from '../store/states/my-todo.state';
import { BeginGetMyToDoAction, BeginRemoveMyToDoAction } from '../store/actions/my-todo.action';

@Component({
  selector: 'app-remove-my-todo',
  templateUrl: './remove-my-todo.component.html',
  styleUrls: ['./remove-my-todo.component.sass']
})
export class RemoveMyTodoComponent implements OnInit {

  @Input() public myParentToDo: MyTodo;

  // Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService, private store: Store<{ myTodos: MyToDoState }>) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  remove() {
    console.log(JSON.stringify('What is this: ' + this.myParentToDo._id));
    this.store.dispatch(BeginRemoveMyToDoAction({payload: this.myParentToDo}));
    this.store.dispatch(BeginGetMyToDoAction());
  }
}

import { Component, OnInit, Input } from '@angular/core';
import MyTodo from '../models/my-todo.model';
import { Store} from '@ngrx/store';
import MyToDoState from '../store/states/my-todo.state';
import { BeginGetMyToDoAction, BeginRemoveMyToDoAction } from '../store/actions/my-todo.action';

@Component({
  selector: 'app-remove-my-todo',
  templateUrl: './remove-my-todo.component.html',
  styleUrls: ['./remove-my-todo.component.sass']
})
export class RemoveMyTodoComponent {

  @Input() public myParentToDo: MyTodo;

  // Contructor injection of Service Class
  constructor(private store: Store<{ myTodos: MyToDoState }>) {
  }

  remove() {
    console.log(JSON.stringify('What is this: ' + this.myParentToDo._id));
    this.store.dispatch(BeginRemoveMyToDoAction({payload: this.myParentToDo}));
    this.store.dispatch(BeginGetMyToDoAction());
  }
}

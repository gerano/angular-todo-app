import { Component, OnInit } from '@angular/core';
import {MyTodoDataService} from '../my-todo-data.service'
import { MyTodo } from '../my-todo';

@Component({
  selector: 'app-new-my-todo',
  templateUrl: './new-my-todo.component.html',
  styleUrls: ['./new-my-todo.component.css'],
})
export class NewMyTodoComponent implements OnInit {

  public newMyTodo: MyTodo = new MyTodo();

  //Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService) { 
  }
  
  ngOnInit() {
  }

  addTodo() {

    if (!this.newMyTodo.title) {
      return;
    }

    this.myTodoDataService.add(this.newMyTodo);
    this.newMyTodo = new MyTodo();
  }
}

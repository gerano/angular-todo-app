import { Component, OnInit } from '@angular/core';
import {MyTodoDataService} from '../my-todo-data.service'
import { MyTodo } from '../my-todo';

@Component({
  selector: '.app-new-my-todo',
  templateUrl: './new-my-todo.component.html',
  styleUrls: ['./new-my-todo.component.sass'],
})
export class NewMyTodoComponent implements OnInit {

  public newMyTodo: MyTodo = new MyTodo();

  //Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService) { 
  }
  
  ngOnInit() {
  }

  addTodo() {
    this.myTodoDataService.add(this.newMyTodo);
    console.log('THE TODO:' + JSON.stringify(this.newMyTodo));
    this.newMyTodo = new MyTodo();
  }
}

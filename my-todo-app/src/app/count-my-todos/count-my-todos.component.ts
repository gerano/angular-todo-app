import { Component, OnInit } from '@angular/core';
import {MyTodoDataService} from '../my-todo-data.service'

@Component({
  selector: 'app-count-my-todos',
  templateUrl: './count-my-todos.component.html',
  styleUrls: ['./count-my-todos.component.css']
})
export class CountMyTodosComponent implements OnInit {

  //Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService) { 
  }

  ngOnInit() {
  }

  get myTodos() {
    return this.myTodoDataService.getAll();
  }

}

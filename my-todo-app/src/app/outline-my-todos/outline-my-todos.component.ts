import { Component, OnInit } from '@angular/core';
import {MyTodoDataService} from '../my-todo-data.service'
import {RemoveMyTodoComponent} from '../remove-my-todo/remove-my-todo.component';
import { MyTodo } from '../my-todo';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-outline-my-todos',
  templateUrl: './outline-my-todos.component.html',
  styleUrls: ['./outline-my-todos.component.css'],
})
export class OutlineMyTodosComponent implements OnInit {

  //private todos: MyTodo[] = [];

  //Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService) { 
  }

  ngOnInit() {
    /*return this.myTodoDataService.getAll().subscribe((data: MyTodo[]) => {
      console.log('The Data: ' + JSON.stringify(data));
      this.todos = data;
    });*/
  }
  
  get myTodos(){
    return this.myTodoDataService.getAll();
    //return this.todos;
  }

  toggleComplete(myTodo: MyTodo) {
    this.myTodoDataService.toggleComplete(myTodo);

  }
}

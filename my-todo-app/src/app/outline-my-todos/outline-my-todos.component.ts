import { Component, OnInit, Input } from '@angular/core';
import {MyTodoDataService} from '../my-todo-data.service'
import {RemoveMyTodoComponent} from '../remove-my-todo/remove-my-todo.component';
import { MyTodo } from '../my-todo';
import { HttpResponse } from '@angular/common/http';
import { Observable, timer, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-outline-my-todos',
  templateUrl: './outline-my-todos.component.html',
  styleUrls: ['./outline-my-todos.component.css'],
})
export class OutlineMyTodosComponent implements OnInit {
  
  private todos$: MyTodo[]= [];

  //Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService) { 
  }

  ngOnInit() {
    const eventSource = timer(0, 500);
    eventSource.pipe(switchMap(() =>this.myTodoDataService.getAll())).subscribe((data: MyTodo[]) => this.todos$ = data);
    console.log(JSON.stringify(this.todos$));
  }
  
  get myTodos(){
    //return this.myTodoDataService.getAll();
    return this.todos$;
  }

  toggleComplete(myTodo: MyTodo) {
    this.myTodoDataService.toggleComplete(myTodo);

  }
}

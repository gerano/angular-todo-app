import { Component, OnInit } from '@angular/core';
import {MyTodoDataService} from '../my-todo-data.service'
import { HttpResponse } from '@angular/common/http';
import { Observable, timer, interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { MyTodo } from '../my-todo';

@Component({
  selector: 'app-count-my-todos',
  templateUrl: './count-my-todos.component.html',
  styleUrls: ['./count-my-todos.component.css']
})
export class CountMyTodosComponent implements OnInit {

  private todos$: MyTodo[]= [];

  //Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService) { 
  }

  ngOnInit() {
    const eventSource = timer(0, 500);
    eventSource.pipe(switchMap(() =>this.myTodoDataService.getAll())).subscribe((data: MyTodo[]) => this.todos$ = data);
    console.log(JSON.stringify(this.todos$));
  }

  get myTodos() {
    return this.todos$;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import {MyTodoDataService} from '../my-todo-data.service'
import { MyTodo } from '../my-todo';

@Component({
  selector: 'app-remove-my-todo',
  templateUrl: './remove-my-todo.component.html',
  styleUrls: ['./remove-my-todo.component.sass']
})
export class RemoveMyTodoComponent implements OnInit {

  @Input() public myParentTodo: MyTodo;

  //Contructor injection of Service Class
  constructor(private myTodoDataService: MyTodoDataService) { 
  }

  ngOnInit() {
  }
  
  remove() {
    this.myTodoDataService.deleteById(this.myParentTodo.id);
  } 
}

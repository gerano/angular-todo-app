import { Injectable } from '@angular/core';
import { MyTodo } from './my-todo';

@Injectable({
  providedIn: 'root'
})
export class MyTodoDataService {

  // we need to store the lastId in order to provide a kind of autoinc solution
  //TODO: maybe let us retrieve the Todos from a NodeJS backend having a mongo db  in place?
  private lastId: number = 0;

  //TODO: get this from a NodeJs backend having a mongo db  maybe?
  private myTodos: MyTodo[] = [];

  constructor() { }

  //POST /todos with values of the new Todo in the body
  public add(myTodo: MyTodo): MyTodoDataService {
    if (!myTodo.id) {
      myTodo.id = ++this.lastId;
    }
    this.myTodos.push(myTodo);

    return this;
  }

  //DELETE /todos/:id
  public deleteById(id: number): MyTodoDataService {
    this.myTodos = this.myTodos.filter(myTodo => myTodo.id !== id);
    return this;
  }

  //PUT /todos/:id
  public updateById(id: number, values: Object = {}): MyTodo {

    //TODO: read this from the NodeJS backend
    let myTodo = this.getById(id);

    if (!myTodo) {
      return null;
    }

    Object.assign(myTodo,  values);
    return myTodo;
  }

  public getAll(): MyTodo[] {
    return this.myTodos;
  }

  public getById(id: number): MyTodo {
    return this.myTodos.filter(myTodo => myTodo.id === id).pop();
  }

  public toggleComplete(myTodo: MyTodo): MyTodo {
    let updated = this.updateById(myTodo.id, {
      complete: !myTodo.complete
    });
    return updated;
  }


}

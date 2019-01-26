import { Injectable } from '@angular/core';
import { MyTodo } from './my-todo';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTodoDataService {

  private uri = 'http://localhost:4000/todo';

  // we need to store the lastId in order to provide a kind of autoinc solution
  //TODO: maybe let us retrieve the Todos from a NodeJS backend having a mongo db  in place?
  private lastId: number = 0;

  //TODO: get this from a NodeJs backend having a mongo db  maybe?
  private myTodos: MyTodo[] = [];

  constructor(private http: HttpClient) { }

  //POST /todos with values of the new Todo in the body
  public add(myTodo: MyTodo): MyTodoDataService {
    if (!myTodo.todoId) {
      myTodo.todoId = ++this.lastId;
    }
    console.log(JSON.stringify(myTodo));
    this.myTodos.push(myTodo);
    /*this.http.post(`${this.uri}`, myTodo).subscribe(res => {
      console.log('Done with response:' + JSON.stringify(res))
      this.myTodos.push(myTodo);
    })*/
    return this;
  }

  //DELETE /todos/:id
  public deleteById(id: number): MyTodoDataService {
    this.myTodos = this.myTodos.filter(myTodo => myTodo.todoId !== id);
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
  //public getAll() {
    return this.myTodos;
    //return this.http.get(`${this.uri}`);;
  }

  public getById(id: number): MyTodo {
    return this.myTodos.filter(myTodo => myTodo.todoId === id).pop();
  }

  public toggleComplete(myTodo: MyTodo): MyTodo {
    let updated = this.updateById(myTodo.todoId, {
      complete: !myTodo.complete
    });
    return updated;
  }


}

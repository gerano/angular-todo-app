import { Injectable } from '@angular/core';
import { MyTodo } from './my-todo';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyTodoDataService {

  private uri = 'http://localhost:4000/todo';

  // we need to store the lastId in order to provide a kind of autoinc solution
  private lastId: number = 0;
  private myTodos: MyTodo[] = [];

  constructor(private http: HttpClient) { }

  //POST /todos with values of the new Todo in the body
  public add(myTodo: MyTodo): MyTodoDataService {
    if (!myTodo.todoId) {
      myTodo.todoId = ++this.lastId;
    }
    console.log(JSON.stringify(myTodo));
    //this.myTodos.push(myTodo);

    this.http.post(`${this.uri}`, myTodo).subscribe(res => {
      console.log('Done with response:' + JSON.stringify(res))
      this.myTodos.push(myTodo);
    })
    return this;
  }

  //DELETE /todos/:id
  public deleteById(id: number): MyTodoDataService {
    //this.myTodos = this.myTodos.filter(myTodo => myTodo.todoId !== id);
    this.removeMyTodo(id).subscribe(response => console.log(JSON.stringify(response)));
    return this;
  }

  //PUT /todos/:id
  public updateById(id: number, values: Object = {}): MyTodo {
    /*let myTodo = this.getById(id);
    if (!myTodo) {
      return null;
    }
    Object.assign(myTodo,  values);
    return myTodo;*/

    let updatedMyTodo: MyTodo; 
    console.log('UPDATE with id ' + id + ' and  obj ' + JSON.stringify(values));
    this.updateMyTodo(id, values).subscribe((response) => 
              this.getById(id).subscribe(
                (updatedTodo: MyTodo) => {
                  updatedMyTodo = updatedTodo;
                  console.log('UPDATED obj ' + JSON.stringify(updatedTodo));
                }
              )
    );
    return updatedMyTodo;
  }

  //public getAll(): MyTodo[] {
  public getAll() {
    //return this.myTodos;
    return this.http.get(`${this.uri}`);
  }

  public toggleComplete(myTodo: MyTodo): MyTodo {
    let updated = this.updateById(myTodo.todoId, {
      complete: !myTodo.complete
    });
    return updated;
  }

  private getById(todoId: number): Observable<any> {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    
    headers.set('Content-Type', 'application/json');
    params.set("id", String(todoId));

    return this.http.get(`${this.uri}/${todoId}`, { headers, params });
    //return this.myTodos.filter(myTodo => myTodo.todoId === id).pop();
  }

  private removeMyTodo(todoId: number): Observable<any> {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    
    headers.set('Content-Type', 'application/json');
    params.set("id", String(todoId));

    return this.http.delete(`${this.uri}/${todoId}`, { headers, params });
  }

  private updateMyTodo(todoId: number, values: Object = {}): Observable<any> {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    
    headers.set('Content-Type', 'application/json');
    params.set("id", String(todoId));

    return this.http.put(`${this.uri}/${todoId}`, values, { headers, params });
    //return this.http.request("PUT",`${this.uri}`,{body: values, responseType:"json", headers: headers, params: params});
    
  }
}

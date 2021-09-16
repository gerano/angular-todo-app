import HttpDataService from 'src/app/services/http-data.service';
import MyTodo from 'src/app/models/my-todo.model';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class MyTodoStoreDataService extends HttpDataService {

  private myToDos: MyTodo[] = [];
  private newMyToDos$: Observable<MyTodo[]>;

  public toggleComplete(myTodo: MyTodo): Observable<any> {
    let httpPutResult$: Observable<any> = this.httpPut(myTodo._id, { complete: !myTodo.complete });

    return of(httpPutResult$.subscribe((response) => {return this.queryNewMyToDoList()}));
  }

  public httpDelete(id: number): Observable<any> {
    let httpDeleteResult$: Observable<any> = super.httpDelete(id);

    return of(httpDeleteResult$.subscribe((response: any) => {return this.queryNewMyToDoList()}))
  }

  private queryNewMyToDoList(): Observable<any> {
    return of(this.httpGet().subscribe(
      (updatedData: any) => {
        this.myToDos = Object.assign([], this.myToDos);
        this.myToDos.push(updatedData);

        return this.newMyToDos$ = new Observable<any>((observer) => {
          observer.next(this.myToDos);
          observer.complete();
        });
      }
    ));
  }


}

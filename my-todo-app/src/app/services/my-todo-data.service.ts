import { Injectable } from '@angular/core';
import MyTodo  from '../models/my-todo.model';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, timer} from 'rxjs';
import HttpDataService from './http-data.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyTodoDataService {

  // we need to store the lastId in order to provide a kind of autoinc solution
  private lastId: number = 0;
  private myTodos: Array<MyTodo> = [];

  public constructor(private httpDataService: HttpDataService) {

  }

  //POST /todos with values of the new Todo in the body
  public add(myTodo: MyTodo): MyTodoDataService {
    if (!myTodo._id) {
      myTodo._id = ++this.lastId;
    }
    console.log(JSON.stringify(myTodo));

    this.httpDataService.httpPost(myTodo).subscribe(res => {
      console.log('Done with response:' + JSON.stringify(res))
      this.storeData(res);
    });
    return this;
  }

  //DELETE /todos/:id
  public deleteById(id: number): MyTodoDataService {
    this.httpDataService.httpDelete(id).subscribe(response => console.log(JSON.stringify(response)));
    return this;
  }

  //PUT /todos/:id
  public updateById(id: number, values: Object = {}): MyTodoDataService {
    console.log('UPDATE with id ' + id + ' and  obj ' + JSON.stringify(values));
    this.httpDataService.httpPut(id, values).subscribe((response) => 
              this.httpDataService.httpGetById(id).subscribe(
                (updatedData: any) => {
                  this.storeData(updatedData);
                  console.log('UPDATED obj ' + JSON.stringify(updatedData));
                }
              )
    );
    return this;
  }

  public toggleComplete(myTodo: MyTodo): MyTodoDataService {
    console.log('TOGGLE complete...');
    this.httpDataService.httpPut(myTodo._id, { complete: !myTodo.complete }).subscribe((response) => 
        this.httpDataService.httpGetById(myTodo._id).subscribe(
          (updatedData: any) => {
            this.storeData(updatedData);
            console.log('UPDATED obj ' + JSON.stringify(updatedData));
          }
        )
    );
    return this;
  }

  public getAllLatestData(): Array<MyTodo> {
    this.httpDataService.httpGet().subscribe((data: Array<MyTodo>) => this.storeData(data));
    return this.getAllCachedData();
  }

  public storeData(data: any): MyTodoDataService {
    this.myTodos.push(data);
    return this;
  }

  public getAllCachedData(): Array<MyTodo> {
    return this.myTodos;
  }
}

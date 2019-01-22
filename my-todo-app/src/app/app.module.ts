import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewMyTodoComponent } from './new-my-todo/new-my-todo.component';
import { OutlineMyTodosComponent } from './outline-my-todos/outline-my-todos.component';
import { RemoveMyTodoComponent } from './remove-my-todo/remove-my-todo.component';
import { CountMyTodosComponent } from './count-my-todos/count-my-todos.component';
import {MyTodoDataService} from './my-todo-data.service'

@NgModule({
  declarations: [
    AppComponent,
    NewMyTodoComponent,
    OutlineMyTodosComponent,
    RemoveMyTodoComponent,
    CountMyTodosComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule
  ],
  providers: [MyTodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

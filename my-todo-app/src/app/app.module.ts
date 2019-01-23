import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { NewMyTodoComponent } from './new-my-todo/new-my-todo.component';
import { OutlineMyTodosComponent } from './outline-my-todos/outline-my-todos.component';
import { RemoveMyTodoComponent } from './remove-my-todo/remove-my-todo.component';
import { CountMyTodosComponent } from './count-my-todos/count-my-todos.component';
import {MyTodoDataService} from './my-todo-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    NewMyTodoComponent,
    OutlineMyTodosComponent,
    RemoveMyTodoComponent,
    CountMyTodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCheckboxModule,
    MatListModule
  ],
  providers: [MyTodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

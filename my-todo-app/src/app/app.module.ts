import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { MatCardModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatCheckboxModule,
  MatMenuModule
} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    MatFormFieldModule,
    MatInputModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [MyTodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

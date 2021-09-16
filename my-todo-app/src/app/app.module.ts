import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NewMyTodoComponent } from './new-my-todo/new-my-todo.component';
import { OutlineMyTodosComponent } from './outline-my-todos/outline-my-todos.component';
import { RemoveMyTodoComponent } from './remove-my-todo/remove-my-todo.component';
import { CountMyTodosComponent } from './count-my-todos/count-my-todos.component';
import {MyTodoDataService} from './services/my-todo-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MyToDoReducer } from './store/reducers/my-todo.reducer';
import { MyToDoEffect } from './store/effects/my-todo.effect';
import HttpDataService from './services/http-data.service';
import MyTodoStoreDataService from './services/my-todo-store-data.service';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";

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
    HttpClientModule,
    StoreModule.forRoot({myTodos: MyToDoReducer}),
    EffectsModule.forRoot([MyToDoEffect]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [MyTodoDataService, HttpDataService, MyTodoStoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http'
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

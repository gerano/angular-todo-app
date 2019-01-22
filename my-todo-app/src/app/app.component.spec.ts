import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {NewMyTodoComponent} from './new-my-todo/new-my-todo.component';
import {OutlineMyTodosComponent} from './outline-my-todos/outline-my-todos.component';
import {CountMyTodosComponent} from './count-my-todos/count-my-todos.component';
import {RemoveMyTodoComponent} from './remove-my-todo/remove-my-todo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        NewMyTodoComponent,
        OutlineMyTodosComponent,
        CountMyTodosComponent,
        RemoveMyTodoComponent

      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'A cool simple to use todo app...'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('A cool simple to use todo app...');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  });
});

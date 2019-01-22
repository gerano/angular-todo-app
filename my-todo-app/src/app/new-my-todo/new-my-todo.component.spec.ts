import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMyTodoComponent } from './new-my-todo.component';

describe('NewMyTodoComponent', () => {
  let component: NewMyTodoComponent;
  let fixture: ComponentFixture<NewMyTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMyTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMyTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

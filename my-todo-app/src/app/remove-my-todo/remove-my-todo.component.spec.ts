import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMyTodoComponent } from './remove-my-todo.component';

describe('RemoveMyTodoComponent', () => {
  let component: RemoveMyTodoComponent;
  let fixture: ComponentFixture<RemoveMyTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMyTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMyTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

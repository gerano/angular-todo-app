import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineMyTodosComponent } from './outline-my-todos.component';

describe('OutlineMyTodosComponent', () => {
  let component: OutlineMyTodosComponent;
  let fixture: ComponentFixture<OutlineMyTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlineMyTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineMyTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

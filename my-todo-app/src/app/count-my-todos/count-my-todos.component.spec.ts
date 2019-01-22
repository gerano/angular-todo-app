import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountMyTodosComponent } from './count-my-todos.component';

describe('CountMyTodosComponent', () => {
  let component: CountMyTodosComponent;
  let fixture: ComponentFixture<CountMyTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountMyTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountMyTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

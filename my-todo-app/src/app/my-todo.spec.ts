import { MyTodo } from './my-todo';

describe('MyTodo', () => {
  it('should create an instance', () => {
    expect(new MyTodo()).toBeTruthy();
  });

  it('should accept value object in the constructor', () => {
    let todo = new MyTodo({
      title: 'it is only a test!',
      complete: true
    });
    expect(todo.title).toEqual('it is only a test!');
    expect(todo.complete).toEqual(true);
  });
});

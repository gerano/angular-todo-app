import MyTodo from './my-todo.model';

describe('MyTodo', () => {
  it('should create an instance', () => {
    expect(new MyTodo()).toBeTruthy();
  });

  it('should accept value object in the constructor', () => {
    const todo = new MyTodo({
      title: 'it is only a test!',
      complete: true
    });
    expect(todo.title).toEqual('it is only a test!');
    expect(todo.complete).toEqual(true);
  });
});

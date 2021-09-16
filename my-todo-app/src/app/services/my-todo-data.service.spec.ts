import {TestBed, async, inject} from '@angular/core/testing';
import MyTodo from '../models/my-todo.model';
import {MyTodoDataService} from './my-todo-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTodoDataService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should get injected!', inject([MyTodoDataService, HttpTestingController], (myTodoService: MyTodoDataService, httpMock: HttpTestingController) => {
    expect(myTodoService).toBeTruthy();
  }));

  /*describe('#getAll()', () => {

    it('should return an empty array by default', inject([MyTodoDataService], (myTodoService: MyTodoDataService) => {
      expect(myTodoService.getAll()).toEqual([]);
    }));

    it('should return all todos', inject([MyTodoDataService], (myTodoService: MyTodoDataService) => {
      let myIncompleteTodo = new MyTodo({title: 'That is a NOT completed Todo', complete: false});
      let myCompleteTodo = new MyTodo({title: 'That is a COMPLETED Todo', complete: true});

      myTodoService.add(myIncompleteTodo);
      myTodoService.add(myCompleteTodo);

      let myTodos: any;
      myTodoService.getAll().subscribe((data: MyTodo[]) => myTodos = data);

      expect(myTodos).toEqual([myIncompleteTodo, myCompleteTodo]);
    }));

  });

  /*describe('#add(todo)', () => {

    it('should automatically assign an incrementing id', inject([MyTodoDataService], (myTodoService: MyTodoDataService) => {
      let myIncompleteTodo = new MyTodo({title: 'That is a NOT completed Todo', complete: false});
      let myCompleteTodo = new MyTodo({title: 'That is a COMPLETED Todo', complete: true});

      myTodoService.add(myCompleteTodo);
      myTodoService.add(myIncompleteTodo);

      expect(myTodoService.getById(1)).toEqual(myCompleteTodo);
      expect(myTodoService.getById(2)).toEqual(myIncompleteTodo);
    }));

  });

  describe('#deleteById(id)', () => {

    it('should remove todo with the corresponding id', inject([MyTodoDataService], (myTodoService: MyTodoDataService) => {
      let myIncompleteTodo = new MyTodo({title: 'That is a NOT completed Todo', complete: false});
      let myCompleteTodo = new MyTodo({title: 'That is a COMPLETED Todo', complete: true});

      myTodoService.add(myIncompleteTodo);
      myTodoService.add(myCompleteTodo);

      expect(myTodoService.getAll()).toEqual([myIncompleteTodo, myCompleteTodo]);

      myTodoService.deleteById(1);

      expect(myTodoService.getAll()).toEqual([myCompleteTodo]);
      myTodoService.deleteById(2);
      expect(myTodoService.getAll()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([MyTodoDataService], (myTodoService: MyTodoDataService) => {
      let myIncompleteTodo = new MyTodo({title: 'That is a NOT completed Todo', complete: false});
      let myCompleteTodo = new MyTodo({title: 'That is a COMPLETED Todo', complete: true});

      myTodoService.add(myIncompleteTodo);
      myTodoService.add(myCompleteTodo);

      expect(myTodoService.getAll()).toEqual([myIncompleteTodo, myCompleteTodo]);
      myTodoService.deleteById(3);
      expect(myTodoService.getAll()).toEqual([myIncompleteTodo, myCompleteTodo]);
    }));

  });

  describe('#updateById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([MyTodoDataService], (myTodoService: MyTodoDataService) => {
      let myIncompleteTodo = new MyTodo({title: 'That is a NOT completed Todo', complete: false});
      let expectedTitle = 'my new test title!';

      myTodoService.add(myIncompleteTodo);
      let updatedTodo = myTodoService.updateById(1, {
        title: 'my new test title!'
      });
      expect(updatedTodo.title).toEqual(expectedTitle);
    }));

    it('should return null if todo is not found', inject([MyTodoDataService], (myTodoService: MyTodoDataService) => {
      let myIncompleteTodo = new MyTodo({title: 'That is a NOT completed Todo', complete: false});
      myTodoService.add(myIncompleteTodo);

      let updatedTodo = myTodoService.updateById(2, {
        title: 'my new test title!'
      });

      expect(updatedTodo).toEqual(null);
    }));

  });

  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([MyTodoDataService], (myTodoService: MyTodoDataService) => {
      let myIncompleteTodo = new MyTodo({title: 'That is a NOT completed Todo', complete: false});

      myTodoService.add(myIncompleteTodo);

      let updatedTodo = myTodoService.toggleComplete(myIncompleteTodo);
      expect(updatedTodo.complete).toEqual(true);

      updatedTodo = myTodoService.toggleComplete(myIncompleteTodo);
      expect(updatedTodo.complete).toEqual(false);
    }));

  });*/

});

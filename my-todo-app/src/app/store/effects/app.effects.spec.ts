import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

describe('AppEffects', () => {
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$)
      ]
    });

    //effects = TestBed.get<AppEffects>(AppEffects);
  });

  it('should be created', () => {
    //expect(effects).toBeTruthy();
  });
});

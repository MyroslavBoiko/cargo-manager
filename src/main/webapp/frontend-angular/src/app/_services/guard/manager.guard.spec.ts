import { TestBed } from '@angular/core/testing';

import { ManagerGuard } from './manager.guard';

describe('AuthGuard', () => {
  let guard: ManagerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManagerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

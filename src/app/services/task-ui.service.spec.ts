import { TestBed } from '@angular/core/testing';

import { TaskUIService } from './task-ui.service';

describe('TaskUIServiceService', () => {
  let service: TaskUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

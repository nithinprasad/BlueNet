import { TestBed } from '@angular/core/testing';

import { DiagramApiService } from './diagram-service.service';

describe('DiagramServiceService', () => {
  let service: DiagramApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

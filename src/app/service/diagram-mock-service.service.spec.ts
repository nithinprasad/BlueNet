import { TestBed } from '@angular/core/testing';

import { DiagramMockServiceService } from './diagram-mock-service.service';

describe('DiagramMockServiceService', () => {
  let service: DiagramMockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramMockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

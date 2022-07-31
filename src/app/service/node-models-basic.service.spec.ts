import { TestBed } from '@angular/core/testing';

import { NodeModelsBasicService } from './node-models-basic.service';

describe('NodeModelsBasicService', () => {
  let service: NodeModelsBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeModelsBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

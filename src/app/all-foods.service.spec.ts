import { TestBed } from '@angular/core/testing';

import { AllFoodsService } from './all-foods.service';

describe('AllFoodsService', () => {
  let service: AllFoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

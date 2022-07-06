import { TestBed } from '@angular/core/testing';

import { ListAnimalService } from './list-animal.service';

describe('ListAnimalService', () => {
  let service: ListAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

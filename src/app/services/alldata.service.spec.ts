import { TestBed } from '@angular/core/testing';
import { AlldataService } from './alldata.service';

AlldataService;

describe('AlldataService', () => {
  let service: AlldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

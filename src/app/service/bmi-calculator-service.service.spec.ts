import { TestBed } from '@angular/core/testing';

import { BmiCalculatorServiceService } from './bmi-calculator-service.service';

describe('BmiCalculatorServiceService', () => {
  let service: BmiCalculatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmiCalculatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

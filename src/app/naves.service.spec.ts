/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavesService } from './naves.service';

describe('NavesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavesService]
    });
  });

  it('should ...', inject([NavesService], (service: NavesService) => {
    expect(service).toBeTruthy();
  }));
});

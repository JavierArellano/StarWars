/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TemaService } from './tema.service';

describe('TemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemaService]
    });
  });

  it('should ...', inject([TemaService], (service: TemaService) => {
    expect(service).toBeTruthy();
  }));
});

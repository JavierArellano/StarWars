/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodosdatosService } from './todosdatos.service';

describe('TodosdatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosdatosService]
    });
  });

  it('should ...', inject([TodosdatosService], (service: TodosdatosService) => {
    expect(service).toBeTruthy();
  }));
});

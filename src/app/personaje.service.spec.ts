/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonajeService } from './personaje.service';

describe('PersonajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonajeService]
    });
  });

  it('should ...', inject([PersonajeService], (service: PersonajeService) => {
    expect(service).toBeTruthy();
  }));
});

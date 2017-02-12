import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmsService {

  constructor(private ajax:Http) {

  }
  searchFilms(fUrl='http://swapi.co/api/films/'){
  	return this.ajax.get(fUrl).map(response => response.json());
  }

}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class NavesService {

  constructor(private ajax:Http) {
  }
  searchNaves(url='http://swapi.co/api/starships/'){
  	return this.ajax.get(url).map(response => response.json());
  }
  previous(page){
  	return this.ajax.get('http://swapi.co/api/starships/?page='+page).map(response => response.json());
  }
  siguiente(page){
  	return this.ajax.get('http://swapi.co/api/starships/?page='+page).map(response => response.json());
  }
}

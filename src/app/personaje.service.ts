import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject } from 'rxjs/Rx';


@Injectable()
export class PersonajeService {
  
  constructor(private ajax:Http) {
  }
  searchPjs(url='http://swapi.co/api/people/'){
  	return this.ajax.get(url).map(response => response.json());
  }
  previous(page){
  	return this.ajax.get('http://swapi.co/api/people/?page='+page).map(response => response.json());
  }
  siguiente(page){
  	return this.ajax.get('http://swapi.co/api/people/?page='+page).map(response => response.json());
  }
}

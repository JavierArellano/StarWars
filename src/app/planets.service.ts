import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class PlanetsService {

  constructor(private ajax:Http) {
  }
  searchPlanets(url='http://swapi.co/api/planets/'){
  	return this.ajax.get(url).map(response => response.json());
  }
  previous(page){
  	return this.ajax.get('http://swapi.co/api/planets/?page='+page).map(response => response.json());
  }
  siguiente(page){
  	return this.ajax.get('http://swapi.co/api/planets/?page='+page).map(response => response.json());
  }
}

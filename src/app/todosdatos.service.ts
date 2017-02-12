import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class TodosdatosService {
  private listaTodosLosPersonajes: Subject<any> = new Subject<any>();
  private listaPj: any;
  private listaTodosLosPlanetas: Subject<any> = new Subject<any>();
  private listaPlanet: any;
  private listaTodasLasNaves: Subject<any> = new Subject<any>();
  private listaNaves: any;


  constructor(private ajax:Http) {
    this.listaPj=[];
    this.listaPlanet=[];
    this.listaNaves=[];
	}
// Parte de todos los personajes:
//----------------------------------
  anadirPj(resp){
    for( let pj of resp.results){
      this.listaPj.push(pj);
    }
    this.listaTodosLosPersonajes.next(this.listaPj);
  }
  pedirTodosPj(){
    for (let i=1; i<10; i++){
      this.searchAllPj(i);
    }
  }
  listaObsPj(): Observable<any>{
    return this.listaTodosLosPersonajes.asObservable();
  }
  searchAllPj(num){
  	return this.ajax.get('http://swapi.co/api/people/?page='+num)
  	.map(response => response.json())
  	.subscribe(response=> {this.anadirPj(response)});
  }
//----------------------------------
//Parte de todos los planetas:
//----------------------------------
  anadirPlanet(resp){
    for( let plan of resp.results){
      this.listaPlanet.push(plan);
    }
    this.listaTodosLosPlanetas.next(this.listaPlanet);
  }
  pedirTodosPlanet(){
    for (let i=1; i<8; i++){
      this.searchAllPlanet(i);
    }
  }
  listaObsPlanet(): Observable<any>{
    return this.listaTodosLosPlanetas.asObservable();
  }
  searchAllPlanet(num){
  	return this.ajax.get('http://swapi.co/api/planets/?page='+num)
  	.map(response => response.json())
  	.subscribe(response=> {this.anadirPlanet(response)});
  }
//----------------------------------
//Parte de todas las naves:
//----------------------------------
  anadirNave(resp){
    for( let nave of resp.results){
      this.listaNaves.push(nave);
    }
    this.listaTodasLasNaves.next(this.listaNaves);
  }
  pedirTodasNaves(){
    for (let i=1; i<4; i++){
      this.searchAllNaves(i);
    }
  }
  listaObsNaves(): Observable<any>{
    return this.listaTodasLasNaves.asObservable();
  }
  searchAllNaves(num){
    return this.ajax.get('http://swapi.co/api/starships/?page='+num)
    .map(response => response.json())
    .subscribe(response=> {this.anadirNave(response)});
  }
}

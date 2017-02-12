import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class TemaService {
	estado:boolean;
	private estadoVar: Subject<any> = new Subject<any>();
  constructor() {
  	this.estado=true;
  }
  cambia(algo){
  	if (algo){
  		this.estado=false;
  	}else if(!algo){
  		this.estado=true;
  	}
  	this.estadoVar.next(this.estado);
  }
  estadoObs(): Observable<any>{
    return this.estadoVar.asObservable();
  }
}

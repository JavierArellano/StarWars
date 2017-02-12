import { Component, OnInit } from '@angular/core';
import { TemaService } from '../tema.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  	title = 'Star Wars';
  	subtitle = 'Todos los datos estan aquí.';
	normal:boolean;
  constructor(private temaServ: TemaService) {
  	this.normal=true;
  }
  cambio(){
  	this.temaServ.cambia(this.normal);
  }

  ngOnInit() {
  	this.temaServ.estadoObs().subscribe(
  		data => {this.normal=data;},);
  }

}

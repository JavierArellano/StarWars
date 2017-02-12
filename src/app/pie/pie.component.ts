import { Component, OnInit } from '@angular/core';
import { TemaService } from '../tema.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
	normal:boolean;
  constructor(private temaServ: TemaService) {
  	this.normal=true;
  }
  ngOnInit() {
  	this.temaServ.estadoObs().subscribe(
  		data => {this.normal=data;},);
  }

}
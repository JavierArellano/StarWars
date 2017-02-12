import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { FilmsService } from '../films.service';
import { PersonajeService } from '../personaje.service';
import { TodosdatosService } from '../todosdatos.service';
import { NavesService } from '../naves.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers: [TodosdatosService]
})
export class PersonajesComponent implements OnInit {
  nombre:string;
	page:number;
	planeta:any;
  personajes:any;
  films:any;
  naves:any;

  constructor(private filmsServ: FilmsService, private pjServ: PersonajeService, private todos: TodosdatosService) {
    this.nombre='';
  	this.page=1;
  	this.subscribtoPlanet();
    this.subscribtoNaves();
  }
  conseguirDato(url){
    let sepUrl = url.split('/');
    let nuevoStr = sepUrl[4]+'/'+sepUrl[5];
    return nuevoStr;
  }
  mostrar(event){
    if(event.target.firstElementChild){
      if (event.target.firstElementChild.style.display == 'none'){
        event.target.firstElementChild.style.display = 'block';
      }else if(event.target.firstElementChild.style.display == 'block'){
        event.target.firstElementChild.style.display = 'none';
      }
    }
  }
  buscarPeli(peliUrl){
    for (let peli of this.films.results){
      if (peliUrl==peli.url){
        return peli.title;
      }
    }
  }
  buscarPl(plUrl){
    for (let planet of this.planeta) {
      if (plUrl==planet.url){
        return planet.name;
      }
    }
  }
  buscarNave(naveUrl){
    for (let nave of this.naves) {
      if (naveUrl==nave.url){
        return nave.model;
      }
    }
  }
  siguientePeti(){
    if (this.page<7){
      this.page++;
      this.pjServ.siguiente(this.page).subscribe(
        data => {this.personajes=data;},
        );
    }
  }
  anteriorPeti(){
    if (this.page>1){
      this.page--;
      this.pjServ.previous(this.page).subscribe(
        data => {this.personajes=data;},
        );
    }
  }
  subscribtoPlanet(){
    this.todos.listaObsPlanet().subscribe(
      data => {this.planeta=data;},);
  }
  subscribtoNaves(){
    this.todos.listaObsNaves().subscribe(
      data => {this.naves=data;},);
  }
  ngOnInit() {
    this.todos.pedirTodosPlanet();
    this.todos.pedirTodasNaves();
    this.pjServ.searchPjs().subscribe(
      data => {this.personajes=data;},
      );
    this.filmsServ.searchFilms().subscribe(
      data => {this.films=data;},
      );
  }

}

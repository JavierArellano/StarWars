import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { PlanetsService } from '../planets.service';
import { FilmsService } from '../films.service';
import { PersonajeService } from '../personaje.service';
import { NavesService } from '../naves.service';
import { TodosdatosService } from '../todosdatos.service';
//import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [TodosdatosService]
})
export class DetalleComponent implements OnInit {
	parametro1:any;
	parametro2:any;
	url:string;
	objeto:any;
	tipo:string;
  personajes:any;
  planeta:any;
  naves:any;
  films:any;

  constructor(
    private route: ActivatedRoute,
    private naveServ: NavesService,
    private planetaServ: PlanetsService,
    private filmsServ: FilmsService,
    private pjServ: PersonajeService,
    private todos: TodosdatosService
    ) {
  	this.url = 'http://swapi.co/api'
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
  buscarPj(pjUrl){
    for (let person of this.personajes) {
      if (pjUrl==person.url){
        return person.name;
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
  peticion(){
  	let nuevaUrl = this.url + '/' + this.parametro1 + '/' + this.parametro2;
  	switch (this.parametro1) {
  		case "people":
  			this.pjServ.searchPjs(nuevaUrl).subscribe(
  				data => {this.objeto=data;this.tipo='people';},
  				);
        this.subscribtoNaves(),
        this.subscribtoPlanet();
        this.subscribtoFilm();
        break;
  		case "films":
  			this.filmsServ.searchFilms(nuevaUrl).subscribe(
  				data => {this.objeto=data;this.tipo='films';},
  				);
        this.subscribtoNaves(),
        this.subscribtoPlanet();
        this.subscribtoPj();
        break;
  		case "starships":
  			this.naveServ.searchNaves(nuevaUrl).subscribe(
  				data => {this.objeto=data;this.tipo='starships';},
  				);
        this.subscribtoPj();
        this.subscribtoFilm();
        break;
  		case "planets":
  			this.planetaServ.searchPlanets(nuevaUrl).subscribe(
  				data => {this.objeto=data;this.tipo='planets';},
  				);
        this.subscribtoPj();
        this.subscribtoFilm();
        break;
  	}
  }
  subscribtoPj(){
    this.todos.listaObsPj().subscribe(
      data => {this.personajes=data;},);
  }
  subscribtoPlanet(){
    this.todos.listaObsPlanet().subscribe(
      data => {this.planeta=data;},);
  }
  subscribtoNaves(){
    this.todos.listaObsNaves().subscribe(
      data => {this.naves=data;},);
  }
  subscribtoFilm(){
    this.filmsServ.searchFilms().subscribe(
      data => {this.films=data;},
      );
  }

  ngOnInit() {
    // Recogemos los parametros de la URL
    this.route.params.subscribe(params => {
    	this.parametro1 = params['param1'];
    	this.parametro2 = params['param2'];
      this.peticion();
    });

    this.todos.pedirTodosPlanet();
    this.todos.pedirTodasNaves();
    this.todos.pedirTodosPj();
  }

}

import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../planets.service';
import { FilmsService } from '../films.service';
import { PersonajeService } from '../personaje.service';
import { TodosdatosService } from '../todosdatos.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css'],
  providers: [TodosdatosService]
})
export class PlanetasComponent implements OnInit {
	planetas:any;
  films:any;
  personajes:any;
  page:number;

  constructor(private planetaServ: PlanetsService, private filmsServ: FilmsService, private todos: TodosdatosService) {
    this.page=1;
    this.subscribtoPj();
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
  siguientePeti(){
    if (this.page<7){
      this.page++;
      this.planetaServ.siguiente(this.page).subscribe(
        data => {this.planetas=data;},
        );
    }
  }
  anteriorPeti(){
    if (this.page>1){
      this.page--;
      this.planetaServ.previous(this.page).subscribe(
        data => {this.planetas=data;},
        );
    }
  }
  subscribtoPj(){
    this.todos.listaObsPj().subscribe(
      data => {
        this.personajes=data;
      },);
  }
  ngOnInit() {
    this.todos.pedirTodosPj();
    this.planetaServ.searchPlanets().subscribe(
      data => {this.planetas=data;},
      );
    this.filmsServ.searchFilms().subscribe(
      data => {this.films=data;},
      );
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PlanetsService } from './planets.service';
import { NavesService } from './naves.service';
import { FilmsService } from './films.service';
import { TodosdatosService } from './todosdatos.service';
import { PersonajeService } from './personaje.service';
import { TemaService } from './tema.service';
import { Routes, RouterModule } from '@angular/router';
import {Ng2BreadcrumbModule, BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';

import { AppComponent } from './app.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ErrorComponent } from './error/error.component';
import { PieComponent } from './pie/pie.component';
import { FiltroPlanetPipe } from './filtro-planet.pipe';
import { NavesComponent } from './naves/naves.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
//path '' es ruta por defecto; path ** es error;
  { path: '', component: PlanetasComponent },
  { path: 'planetas', component: PlanetasComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'naves', component: NavesComponent },
  { path: 'detalle/:param1/:param2', component: DetalleComponent },
  { path: '**', component: ErrorComponent }
];



export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    PlanetasComponent,
    CabeceraComponent,
    PersonajesComponent,
    ErrorComponent,
    PieComponent,
    FiltroPlanetPipe,
    NavesComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BreadcrumbModule,
    routing
  ],
  providers: [
    PlanetsService,
    FilmsService,
    PersonajeService,
    NavesService,
    TemaService,
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

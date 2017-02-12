import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPlanet'
})
export class FiltroPlanetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

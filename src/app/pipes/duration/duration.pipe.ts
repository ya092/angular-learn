import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let result: string;
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    if (hours && minutes) {
      result = `${hours}h ${minutes}min`;
    } else if (hours && !minutes) {
      result = `${hours}h`;
    } else {
      result = `${minutes}min`;
    }
    return result;
  }
}

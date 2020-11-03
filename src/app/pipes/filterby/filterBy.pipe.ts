import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/models/models';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(array: ICourse[], value: string): any {
    return value ? array.filter(item => item.title.toLowerCase().includes(value)) : array;
  }

}

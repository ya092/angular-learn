import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/models/models';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: ICourse[], args?: any): any {
    return value.sort(
      (a, b) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime()
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate'
})
export class ShortDatePipe implements PipeTransform {

  transform(value: any): any {
    return value.slice(value.length -5, value.length)+ "  |  "+ value.slice(0, 10) ;
  }

}

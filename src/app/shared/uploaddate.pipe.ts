import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uploaddate'
})
export class UploaddatePipe implements PipeTransform {

  transform(value: any){
    return value.slice(0,10);
  }

}

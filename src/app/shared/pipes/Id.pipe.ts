import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  transform(id: number): number {
    // 2022.1.37-0018
  return id;
  }

}

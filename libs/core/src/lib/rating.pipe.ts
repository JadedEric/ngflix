import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(rating: string): Array<boolean> {
    
    const init = parseInt(rating.split('/')[0], 0);
    const array: Array<boolean> = [];

    for (let i = 0; i <= 9; i++) {

      if (i < init) {
        array.push(true);
      }
      else {
        array.push(false)
      }      
    }

    return array;
  }

}

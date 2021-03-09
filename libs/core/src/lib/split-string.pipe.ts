import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitString'
})
export class SplitStringPipe implements PipeTransform {

  transform(value: string, ...args: string[]): Array<string> {

    const split = value.split(args[0]);
    const array = split.map((s: string) => s.trim());    
    
    return array;
  }

}

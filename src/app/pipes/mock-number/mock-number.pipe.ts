import {Pipe, PipeTransform} from '@angular/core';

/**
 * A simple pipe to simplify the repetition of mock elements in html
 */
@Pipe({
  name: 'mockNumber'
})
export class MockNumberPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}

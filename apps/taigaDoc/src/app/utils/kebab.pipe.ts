import { Pipe, PipeTransform } from '@angular/core';

export function toKebab(str: string): string {
  return str.replace(/' '/g, '-').replace(/([A-Z]+)(?![a-z])/g, (_, match) => {
    if (match.length > 1) {
      return '-' + match.toLowerCase();
    }
    return match.toLowerCase();
  });
}

@Pipe({
  standalone: true,
  name: 'myKebab',
})
export class MyKebabPipe implements PipeTransform {
  public readonly transform = toKebab;
}

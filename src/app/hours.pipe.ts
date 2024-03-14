import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours',
  standalone: true
})
export class HoursPipe implements PipeTransform {

  transform(minutes: number): string {
    if (minutes < 60) {
      return `${minutes} דקות`;
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    if (remainingMinutes === 0) {
      return `${hours} שעות`;
    }
  
    return `${hours} שעות ו ${remainingMinutes} דקות`;
  }

}

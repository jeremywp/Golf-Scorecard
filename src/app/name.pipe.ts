import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})


export class NamePipe implements PipeTransform {

  transform(name: string, players: any): any {

    let repeat = false;
    let c = 1;

    for (let i in players) {
      if (players[i].name == name && c > 1) {
        repeat = true;

      } else if (players[i].name == name) {
        c++;
      }
    }

    return repeat ? name + c : name;
  }

}

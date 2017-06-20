import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
      h3 {
        color: dodgerblue;
      }
  `]
})
export class AppComponent {
  showSecret = false;
  counter: number=0;
  log = [];
  constructor() {

  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }

}

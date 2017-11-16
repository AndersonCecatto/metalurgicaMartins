import { MaterializeAction } from 'angular2-materialize';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  navbarResponsive = new EventEmitter<string | MaterializeAction>();

  responsive(){
    this.navbarResponsive.emit({ action: "sideNav", params: ['show'] });
  }
}

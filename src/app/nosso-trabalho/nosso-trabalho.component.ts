import { MaterializeAction } from 'angular2-materialize';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nosso-trabalho',
  templateUrl: './nosso-trabalho.component.html',
  styleUrls: ['./nosso-trabalho.component.scss'],
  
})
export class NossoTrabalhoComponent implements OnInit {

   imageAnimation = new EventEmitter<string | MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

  show(){
    this.imageAnimation.emit({action: 'materialboxed', params: ['materialboxed']});
  }
}

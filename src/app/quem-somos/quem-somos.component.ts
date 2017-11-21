import { MaterializeAction } from 'angular2-materialize';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent implements OnInit {

  public carosel1: string;

  parallaxAction = new EventEmitter<string | MaterializeAction>();


  constructor() {
    this.carosel1 = '../../assets/img/header_met.jpg';
   }

  ngOnInit() {
  }

  show(){
    this.parallaxAction.emit({action:'.parallax', params:['parallax']})
  }

}

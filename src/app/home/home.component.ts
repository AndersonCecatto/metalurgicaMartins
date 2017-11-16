import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carouselAction = new EventEmitter<string | MaterializeAction>();
  modalActions1 = new EventEmitter<string | MaterializeAction>();
  modalActions2 = new EventEmitter<string | MaterializeAction>();

  next() {
    this.carouselAction.emit({ action: "carousel", params: ['next'] });
  }
  prev() {
    this.carouselAction.emit({ action: "carousel", params: ['prev'] });
  }

  open() {
    this.modalActions1.emit({ action: "modal", params: ['open'] });
  }
  close() {
    this.modalActions1.emit({ action: "modal", params: ['close'] });
  }

  open2() {
    this.modalActions2.emit({ action: "modal", params: ['open'] });
  }

  close2() {
    this.modalActions2.emit({ action: "modal", params: ['close'] });
  }

}



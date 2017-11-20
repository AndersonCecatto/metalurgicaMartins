import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public carosel1: string;
  public img_portao: string;
  public img_estrut: string;

  constructor() { 
    this.carosel1 = '../../assets/img/header_met.jpg';
    this.img_portao = '../../assets/img/img-portao.jpg';
    this.img_estrut = '../../assets/img/img-estrutura.jpg';
  }

  ngOnInit() {
  }

  carouselAction = new EventEmitter<string | MaterializeAction>();
  modalActions1 = new EventEmitter<string | MaterializeAction>();
  modalActions2 = new EventEmitter<string | MaterializeAction>();
  slideAction = new EventEmitter<string | MaterializeAction>();


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

  slide(){
    this.slideAction.emit({ action: ".slider", params: ['slider']})
  }

}



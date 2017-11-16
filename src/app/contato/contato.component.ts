import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  lat: number = -26.862069;
  lng: number = -52.4033468;

  constructor() { }

  ngOnInit() {
  }

}

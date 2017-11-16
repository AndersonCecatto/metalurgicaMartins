import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NossoTrabalhoComponent } from './nosso-trabalho/nosso-trabalho.component';
import { ContatoComponent } from './contato/contato.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuemSomosComponent,
    NossoTrabalhoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1E0SzF4-katMpJtvf5sxNiiSw0xC-BVY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ContatoComponent } from './contato/contato.component';
import { NossoTrabalhoComponent } from './nosso-trabalho/nosso-trabalho.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'quem-somos', component: QuemSomosComponent
  },
  {
    path: 'nosso-trabalho', component: NossoTrabalhoComponent
  },
  {
    path: 'contato', component: ContatoComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

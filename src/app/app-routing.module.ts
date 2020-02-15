import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TeamComponent } from './pages/team/team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'equipo', component : TeamComponent},
  {path : 'contacto', component : ContactComponent},
  {path : 'conozcanos', component : AboutComponent},
  {path : '**' , pathMatch: 'full', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

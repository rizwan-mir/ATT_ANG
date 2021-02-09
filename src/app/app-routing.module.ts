import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JockeyComponent} from './jockey/jockey.component'

const routes: Routes = [
  {path:'jockey', component:JockeyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

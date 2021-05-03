import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Game1Component } from './game1/game1.component';
import { YouDiedComponent } from './game1/you-died/you-died.component';
import { HomeMissclickComponent } from './home-missclick/home-missclick.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-missclick', component: HomeMissclickComponent },
  { path: 'kjzdfn;an;rdgoaerihgaerhglaeruiagergilrdf', component: Game1Component },
  { path: 'you-died', component: YouDiedComponent }
];
//in the near future, generate random strings as path which will be saved in the env file.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
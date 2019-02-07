import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {PlayComponent} from "./play/play.component";
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'play', component: PlayComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: '**', redirectTo: 'welcome', pathMatch: 'full'
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PlayerComponent } from './components/player/player.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { MatchScheduleComponent } from './components/match-schedule/match-schedule.component';


const routes: Routes = [
  {path:"", redirectTo:"/login",pathMatch:"full" },
  {path:"login" ,component:LoginComponent},
  {path:"player",component:PlayerComponent},
  {path:"home",component:HomeComponent},
  {path:"team",component:TeamComponent},
  {path:"matches",component:MatchScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

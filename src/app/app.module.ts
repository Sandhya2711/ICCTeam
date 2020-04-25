import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PlayerComponent } from './components/player/player.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { AddToTeamComponent } from './components/add-to-team/add-to-team.component';
import { PlayersService } from './services/players.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMessageBoxComponent } from './components/my-message-box/my-message-box.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TeamService } from './services/team.service';
import { MatchScheduleComponent } from './components/match-schedule/match-schedule.component';
import { MatchScheduleService } from './services/match-schedule.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PlayerComponent,
    MenuComponent,
    HomeComponent,
    TeamComponent,
    AddToTeamComponent,
    MyMessageBoxComponent,
    MatchScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [PlayersService,TeamService,MatchScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

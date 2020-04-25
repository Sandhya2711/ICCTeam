import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Player } from '../player';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers:Player[];
  playerInfo:Player;
  clicked:boolean=false;
  constructor(public teamService:TeamService) {
    this.teamMembers=teamService.getPlayers();
    // this.teamMembers=JSON.parse(localStorage.getItem("TeamArray"));
   }

  ngOnInit(): void {
  }
  playerDetail(player){
    this.clicked=true;
        this.playerInfo=player;
  }

}

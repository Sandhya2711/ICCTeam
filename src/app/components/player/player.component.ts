import { Component, OnInit, Inject, Output,EventEmitter } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from '../player';
import {MatDialog} from "@angular/material/dialog";
import { MyMessageBoxComponent } from 'src/app/components/my-message-box/my-message-box.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  public user;
  public players:Player[];


  constructor(private messageBox:MatDialog,private playerService:PlayersService) { 
    
       this.players=playerService.getPlayers();
       console.log(this.players)
  }

  ngOnInit(): void {
    this.user=localStorage.getItem("user");
    console.log("local storage",this.user)
  }

  isDisabled():boolean{
    if(this.user==="Admin"){
      return false;
    }
    else{
      return true;
    }
  }

  displayDetail(player:Player){
    this.messageBox.open(MyMessageBoxComponent,{data:player});
  }
}

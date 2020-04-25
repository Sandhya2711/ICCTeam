import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Player } from '../player';

@Component({
  selector: 'addToTeam',
  templateUrl: './add-to-team.component.html',
  styleUrls: ['./add-to-team.component.css']
})
export class AddToTeamComponent implements OnInit {
 @Input()public player;
  user;
  errmsg:string;
  teamPlayers:Player[]=[];
  clicked:boolean;
  
  constructor(public teamservice:TeamService) {
    //this.teamPlayers=teamservice.getPlayers();
    if(sessionStorage.length!=2)
    sessionStorage.setItem("TeamArray",JSON.stringify(this.teamPlayers))
    //console.log("lll",localStorage.removeItem("hffd"))
   
  }

  ngOnInit(): void {
    this.user=localStorage.getItem("user");
    //this.teamPlayers=JSON.parse(localStorage.getItem("TeamArray"));
  }

 isAdded():boolean{
      let team=this.teamservice.getPlayers();
      let flag:number=0;
      for(let i of team){
           if(i.playerId===this.player.playerId)
           flag=1;
      }
      if(flag==1)
      return true;
      return false;
 }

  isDisabled():boolean{
    if(this.user==="Admin"){
      return false;
    }
    else{
      return true;
    }
  }

  add(){
    //console.log("clicked  ",this.player)
    this.clicked=true;
   /*  this.teamPlayers=JSON.parse(sessionStorage.getItem("TeamArray"));
    if(this.teamPlayers.length < 11)
     {
    this.teamPlayers.push(this.player);
    console.log("member added")
     }
    sessionStorage.setItem("TeamArray",JSON.stringify(this.teamPlayers)) */
    if(this.teamPlayers.length < 11)
        {
          this.teamservice.addPlayer(this.player)
          console.log("member added")
        }
    else
       window.alert("11 member team selected")
   }

   remove(){
    this.clicked=false;
   /*  this.teamPlayers=JSON.parse(sessionStorage.getItem("TeamArray"));
    for(let p in this.teamPlayers){
      console.log("index",p)
      if(this.teamPlayers[p].playerId===this.player.playerId){
        this.teamPlayers.splice(parseInt(p),1);
        sessionStorage.setItem("TeamArray",JSON.stringify(this.teamPlayers))
        console.log("matched");
      }
    } */
    this.teamservice.removePlayer(this.player)
   }

}

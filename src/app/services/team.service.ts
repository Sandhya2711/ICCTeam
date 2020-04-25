import { Injectable } from '@angular/core';
import { Player } from '../components/player';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamPlayers: Player[] = [];

  constructor() {
    if (localStorage.length != 2)
      localStorage.setItem("TeamArray", JSON.stringify(this.teamPlayers))
  }

  addPlayer(player: Player) {
    this.teamPlayers = JSON.parse(localStorage.getItem("TeamArray"));
    this.teamPlayers.push(player);
    localStorage.setItem("TeamArray", JSON.stringify(this.teamPlayers))
  }
  
  getPlayers() {
    this.teamPlayers = JSON.parse(localStorage.getItem("TeamArray"));
    console.log("get team", this.teamPlayers)
    return this.teamPlayers
  }

  removePlayer(player: Player) {
    this.teamPlayers = JSON.parse(localStorage.getItem("TeamArray"));
    for (let p in this.teamPlayers) {
      console.log("index", p)
      if (this.teamPlayers[p].playerId === player.playerId) {
        this.teamPlayers.splice(parseInt(p), 1);
        localStorage.setItem("TeamArray", JSON.stringify(this.teamPlayers))
        console.log("matched");
      }
    }
  }
}

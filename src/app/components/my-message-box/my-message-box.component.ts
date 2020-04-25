import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Player } from '../player';
@Component({
  selector: 'app-my-message-box',
  templateUrl: './my-message-box.component.html',
  styleUrls: ['./my-message-box.component.css']
})
export class MyMessageBoxComponent implements OnInit {

  player:Player;
  constructor(@Inject(MAT_DIALOG_DATA)public data:Player) {
    this.player=data
   }

  ngOnInit(): void {
  }

}

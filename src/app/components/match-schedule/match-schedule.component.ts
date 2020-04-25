import { Component, OnInit } from '@angular/core';
import { MatchScheduleService } from 'src/app/services/match-schedule.service';
import { Match } from '../match';

@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.css']
})
export class MatchScheduleComponent implements OnInit {

  matches:Match[];
  constructor(private matchService:MatchScheduleService) {
    this.matches=matchService.getMatchSechdule();
    console.log(this.matches)
   }

  ngOnInit(): void {
  }

  getDate(dateStr):Date{
    console.log(dateStr)
       let d=new Date(dateStr);
       console.log("date",d)
       return d;
  }
}

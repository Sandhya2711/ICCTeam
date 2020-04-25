import { Injectable } from '@angular/core';
import { Match } from '../components/match';

@Injectable({
  providedIn: 'root'
})
export class MatchScheduleService {

  private matches: Match[] = [
    {
      matchType: "OneDay",
      groundName: "Sydney Cricket Ground,Sydney",
      oppositeTeam: "Australia",
      matchDate: "2020-04-02"
    },
    {
      matchType: "Test",
      groundName: "Melbourne Cricket Ground",
      oppositeTeam: "Bangladesh",
      matchDate: "2020-06-13"
    },
    {
      matchType: "Test",
      groundName: "Wankhede,Mumbai",
      oppositeTeam:"England",
      matchDate: "2020-06-23"
    },
    {
      matchType: "Twenty Twenty",
      groundName: "Dharamsala,India",
      oppositeTeam: "Australia",
      matchDate: "2020-07-05"
    }
  ]
  constructor() { }

  getMatchSechdule():Match[] {
    return this.matches;
  }
}

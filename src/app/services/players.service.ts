import { Injectable } from '@angular/core';
import {Player} from '../components/player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  players:Player[]= [
    {
      "playerId": 1,
      "playerName": "Virat Kohli",
      "playerPosition": "Opener",
      "playerImage": "../assets/images/1.jpg"
    },
    {
      "playerId": 2,
      "playerName": "Rohit Sharma",
      "playerPosition": "Opener",
      "playerImage":"../assets/images/2.jpg"
    },
    {
      "playerId": 3,
      "playerName": "Jasprit Bumrah",
      "playerPosition": "Bowler",
      "playerImage": "../assets/images/3.jpg"
    },
    {
      "playerId": 4,
      "playerName": "Ravindra Jadeja",
      "playerPosition": "All Rounder",
      "playerImage": "../assets/images/4.jpg"
    },
{
      "playerId": 5,
      "playerName": "MS Dhoni",
      "playerPosition": "Wicket Keeper",
      "playerImage": "../assets/images/5.jpg"
    },
    {
      "playerId": 6,
      "playerName": "Bhuvneshwar Kumar",
      "playerPosition": "Bowler",
      "playerImage": "../assets/images/6.jpg"
    },
    {
      "playerId": 7,
      "playerName": "Cheteshwar Pujara",
      "playerPosition": "Batsman",
      "playerImage":"../assets/images/7.jpg"
    },
    {
      "playerId": 8,
      "playerName": "KL Rahul",
      "playerPosition": "Batsman",
      "playerImage": "../assets/images/8.jpg"
    },
    {
      "playerId": 9,
      "playerName": "Shikhar Dhawan",
      "playerPosition": "Opener",
      "playerImage": "../assets/images/9.jpg"
    },
{
      "playerId": 10,
      "playerName": "Mohammad Shami",
      "playerPosition": "Fast Bowler",
      "playerImage": "../assets/images/10.jpeg"
    },
    {
      "playerId": 11,
      "playerName": "Ishant Sharma",
      "playerPosition": "Bowler",
      "playerImage": "../assets/images/11.jpg"
    },
    {
      "playerId": 12,
      "playerName": "Kuldeep Yadav",
      "playerPosition": "Bowler",
      "playerImage":"../assets/images/12.jpg"
    },
    {
      "playerId": 13,
      "playerName": "Rishabh Pant",
      "playerPosition": "Wicket-Keeper Batsman",
      "playerImage": "../assets/images/13.jpg"
    },
    {
      "playerId": 14,
      "playerName": "Umesh Yadav",
      "playerPosition": "Bowler",
      "playerImage": "../assets/images/14.jpg"
    },
{
      "playerId": 15,
      "playerName": "Yuzvendra Chahal",
      "playerPosition": "Bowler",
      "playerImage": "../assets/images/15.jpg"
    },
    {
      "playerId": 16,
      "playerName": "Hardik Pandya",
      "playerPosition": "All Rounder",
      "playerImage": "../assets/images/16.jpg"
    },
    {
      "playerId": 17,
      "playerName": "Kedar Jadhav",
      "playerPosition": "All Rounder",
      "playerImage":"../assets/images/17.jpg"
    },
    {
      "playerId": 18,
      "playerName": "Dinesh Kartik",
      "playerPosition": "Batsman",
      "playerImage": "../assets/images/18.jpg"
    },
    {
      "playerId": 19,
      "playerName": "Ajinkye Rahane",
      "playerPosition": "BatsMan",
      "playerImage": "../assets/images/19.jpg"
    },
{
      "playerId": 20,
      "playerName": "RaviChandaran Aashwin",
      "playerPosition": "Bowler",
      "playerImage": "../assets/images/20.jpg"
    }
  ]

constructor() { }

getPlayers():Player[]{
  return this.players
}
}
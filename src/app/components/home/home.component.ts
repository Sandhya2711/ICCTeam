import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user;
  constructor() { 
    this.user=localStorage.getItem("user")
    console.log("welcome1 ",this.user)
  }

  ngOnInit(): void {
  }
  

}

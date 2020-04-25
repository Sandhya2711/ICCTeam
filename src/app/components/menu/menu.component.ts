import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

//@Input("userType") public user;
user;
 

constructor() {
  this.user=localStorage.getItem("user")
  console.log("welcome "+ this.user);
}

  ngOnInit(): void {
  }
  
}

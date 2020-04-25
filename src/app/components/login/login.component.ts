import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  password;
  msg: string = "";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(uname, pwd) {
    this.userName = uname;
    this.password = pwd;
  

    if (this.userName === "Admin") {

      if (this.password === "Admin") {
        this.msg="";
        console.log("admin logged in");
        localStorage.setItem("user","Admin")
        this.router.navigate(["/player"])
      } else {
        this.msg = "password Incorrect";
      }

    } else if (this.userName === "Guest") {

      if (this.password === "Guest") {
        this.msg="";
        console.log("guest logged in")
        localStorage.setItem("user","Guest")
        this.router.navigate(["/home"])
      } else {
        this.msg = "password Incorrect";
      }

    } else if(this.password ==""||this.userName=="") {
      this.msg = "Username and Password field required"
    }else{
      this.msg="UserName incorrect"
    }

  }

  //console.log(this.userName," ",this.password)
}



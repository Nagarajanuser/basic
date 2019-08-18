import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userSer:UserService, public myRouter:Router) { }

  ngOnInit() {
  }

  loginform(form:NgForm){
    console.log(form.value);
    this.userSer.loginformDb(form.value).subscribe((data:any[])=>{
        console.log(data);
        if(data.length>0){
          console.log("valid login");
          this.myRouter.navigateByUrl('/');
        }else{
          console.log("Invalid login");
        }
    },(error:any)=>{
        console.log(error);
    },()=>{
        console.log("Completed");
    });

    
  }

}

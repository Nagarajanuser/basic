import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {

  constructor(public userService:UserService, public myRouter:Router ) { }
  usersAll:any;
  i:any;
  ngOnInit() {
  }

  loginform2(form:NgForm){
    console.log(form.value.useremail);
    console.log(form.value.userpwd);
    this.userService.getallusers().subscribe((data:any[])=>{
      console.log(data);
      this.usersAll=data;
 
      
      for(let i of this.usersAll){
        //console.log(i);
        
        console.log(i.useremail);
        console.log(i.userpwd);
        
        if(form.value.useremail==i.useremail && form.value.userpwd==i.userpwd){
          localStorage.setItem("token",i.useremail);
          console.log("Valid user");
          this.myRouter.navigateByUrl('/');
        }else{
          console.log("in Valid user");
        }
      }

    },(error)=>{
      console.log(error);
    },()=>{
      console.log("Completed");
    })
  }
}

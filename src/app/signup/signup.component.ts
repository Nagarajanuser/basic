import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userSer:UserService, public myRouter:Router) { }
    
  ngOnInit() {
  }

  signup(form:NgForm){
        console.log(form.value);
        this.userSer.signupDb(form.value).subscribe((data:any)=>{
          console.log(data);
          
        }, (error:any)=>{
          console.log(error);
        });
        form.reset();

        this.myRouter.navigateByUrl('/login');
  }

}

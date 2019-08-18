import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';  // if pass any value via path
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userDetails:any;

  singleUserId:any;
  singleUserName:any;
  singleUserEmail:any;
  SingleUserPwd:any;

  dataStatus:any;

  constructor(public ActiveRoute:ActivatedRoute, public userSer: UserService ) { }

  ngOnInit() {
    this.getSingleUser();
  }

  getSingleUser(){
    this.ActiveRoute.params.subscribe((param:Params)=>{
      //console.log(param.userId);
      this.userSer.getSingleUserDb(param.userId).subscribe((data:any[])=>{
        //console.log(data[0]);
        this.userDetails=data[0];
        this.singleUserId = this.userDetails._id;
        this.singleUserName = this.userDetails.username;
        this.singleUserEmail = this.userDetails.useremail;
        this.SingleUserPwd = this.userDetails.userpwd;
      },
      (error)=>{
        console.log("my observer error", error);
      },
      ()=>{
        console.log("Completed");
      });
    }); 
  }

  updateUser(form:NgForm){
    this.dataStatus="Updating";
    //console.log(form.value);
    this.userSer.updateUserDb(form.value).subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log("My observer error",error);
    },()=>{
      console.log("Completed");
    });
    this.getSingleUser();
    this.dataStatus="Updated";
  }
  

}

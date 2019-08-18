import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit{

  loading:any;
  userslist:any[] = [];

  constructor(public userSer:UserService) { }
  

  ngOnInit() {
    this.showListOfUsers();
  }

  showListOfUsers(){
    this.userSer.getallusers().subscribe((data:any)=>{
      this.userslist=data;
      //console.log(this.userslist);
    },(error:any)=>{
      console.log("my observer error", error);
    },()=>{
      console.log("completed");
    });
  }

  deleteUser(userid){
    this.userSer.deleteUserDb(userid).subscribe((data:any)=>{
      //console.log(data)
      this.userslist=data;
    },(error:any)=>{
      console.log("My observer Error");
    },
    ()=>{
      console.log("Completed");
    }
  )};

  
  

}

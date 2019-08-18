import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  signupDb(data){
    //console.log("Service page");
    return this.http.post("http://localhost:3000/register", data);
  }
  loginformDb(data){
    //console.log(data);
    return this.http.post("http://localhost:3000/login",data);
  }

  getallusers(){
    //console.log("Listof users");
    return this.http.get("http://localhost:3000/getallusers");
  }

  deleteUserDb(userid:number){
    //console.log("deleteUserDb"+userid);
    return this.http.get("http://localhost:3000/deleteuser/"+userid);
    //return userid;
  }

  getSingleUserDb(userid:number){
    console.log("Servive : get single user");
    return this.http.get("http://localhost:3000/userdetail/"+userid);
  }

  updateUserDb(data){
    //console.log(data);
    return this.http.post("http://localhost:3000/updateuser/",data);
  }
  isLoggedIn(){
    return !!localStorage.getItem("token");
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {User} from './User';
import {UserLogin} from './UserLogin';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserService {

userRegistrationBackendServiceUrl = 'http://localhost:8080/registeruser';

userLoginBackendServiceUrl = 'http://localhost:8080/getuser';
  constructor(private http: HttpClient) {
  }
  

  registerUser(user: User) {
    this.http.post(this.userRegistrationBackendServiceUrl, user,httpOptions);
    
            }

  loginUser(user: User){
  const userlogin: UserLogin = {emailid: user.emailid,password: user.password};
  this.http.post(this.userLoginBackendServiceUrl, userlogin, httpOptions)
  }

   

}

import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {UserService} from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

user: User;

  constructor(
  private route: ActivatedRoute, 
      private router: Router, 
        private userservice: UserService) {
    this.user = new User(); 
    } 

  ngOnInit() {
  }

  onSubmit(){

  this.userservice.registerUser(this.user);
  }


}

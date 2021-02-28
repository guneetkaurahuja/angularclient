import { Component, OnInit } from '@angular/core';

import {User} from '../User';
import {UserService} from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

	user: User;

   constructor(
  private route: ActivatedRoute, 
      private router: Router, 
        private userservice: UserService) {
    this.user = new User(); 
 } 

  ngOnInit() {
  }

  onLogin(user: User){this.userservice.loginUser(user);
  }

}

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../_services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users = [];
  content = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      });
  }
}
export class User {
  id: number;
  username: string;
  email: string;
  roles: Role[];
}

export class Role {
  id: number;
  role: string;
}

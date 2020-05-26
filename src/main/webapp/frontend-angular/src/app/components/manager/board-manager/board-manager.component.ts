import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../_services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.css']
})
export class BoardManagerComponent implements OnInit {
  content = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
        this.router.navigate(['/home']);
      }
    );
  }
}

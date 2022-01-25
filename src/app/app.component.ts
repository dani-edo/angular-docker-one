import { Component, OnInit } from '@angular/core';
import { User } from 'src/services/users';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  port = window.location.port;
  users: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((val) => {
      this.users = val;
    });
  }
}

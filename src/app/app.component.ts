import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  public title = 'gesca-front';
  public users: User[];
  public user: User;

  constructor(private userService: UserService) {

  }

  public ngOnInit(): void {
    console.log('ngOnInit');

    // this.userService.getUsers().subscribe((users: User[]) => {
    //   this.users = users;
    // });

    // Si le utilisateur est connecté il faut récupérer ces données
    this.userService.getUser(1).subscribe((user: User) => this.user = user);
  }
  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
}

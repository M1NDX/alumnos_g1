import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  log() {
    if(this.login) {
      this.authService.logout();
      this.login = this.authService.isAuthenticated();
    }else {
      this.authService.login();
      this.login = this.authService.isAuthenticated();
    }
  }


}

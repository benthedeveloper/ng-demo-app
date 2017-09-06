import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'ng2-adal/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private adalService: AdalService) { }

  ngOnInit() {
    if (this.adalService.userInfo.isAuthenticated) {
      this.router.navigate(['/route-1']);
    }
  }

  login() {
    this.adalService.login();
  }

}

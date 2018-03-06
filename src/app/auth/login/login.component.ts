import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    this.router.navigate(['/home']);
  }
}

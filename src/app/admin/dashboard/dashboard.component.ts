import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/_services/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.auth.SignOut();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  logoLink = 'src\app\shared\logo.png'

  constructor() { }

  ngOnInit(): void {
  }

}

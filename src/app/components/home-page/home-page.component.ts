import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../..//services/registration.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private resgistrationService: RegistrationService) { }

  ngOnInit() {}

  nav(route: string) {
    console.log(route);
    this.router.navigate(['/', route]);
  }

}

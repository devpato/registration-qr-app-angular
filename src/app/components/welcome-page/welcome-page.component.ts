import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.takeMeBack();
  }

  takeMeBack(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }

}

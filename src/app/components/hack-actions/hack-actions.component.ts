import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hack-actions',
  templateUrl: './hack-actions.component.html',
  styleUrls: ['./hack-actions.component.scss']
})
export class HackActionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nav(route: string) {
    this.router.navigate(['/', route]);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	dayOf() {
		return (
			new Date().getMonth() + '/' + new Date().getDay() ===
			new Date('17/04/2019').getMonth() + '/' + new Date('17/04/2019').getDay()
		);
	}
}

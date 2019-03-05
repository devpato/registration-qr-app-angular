import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Visitor } from '../models/visitor.model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
    registrationForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      racf: new FormControl(''),
      title: new FormControl(''),
      email: new FormControl(''),
      team: new FormControl(''),
      acceptTerms: new FormControl(''),
    });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let visitor: Visitor;
    visitor = {
      ...this.registrationForm.value,
      qr: '',
      checkin: ''

    };
    console.log(visitor);
  }

}

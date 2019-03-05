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
    elementType: 'url' | 'canvas' | 'img' = 'url';
    value: Visitor;
    qr = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    this.value = {
      ...this.registrationForm.value,
      checkin: false
    };

    this.value = {
      ...this.value,
      qr: JSON.stringify(this.value)
    };

    this.qr = this.value.qr;
    console.log(this.value);
  }

}

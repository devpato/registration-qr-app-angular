import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Visitor } from '../models/visitor.model';
import { QrService } from '../services/qr.service';
import { Router } from '@angular/router';
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
    value: Visitor;
  constructor(private qrService: QrService, private router: Router) { }

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
    this.qrService.setQR(this.value.qr);
    this.router.navigate(['/qr']);
  }
}

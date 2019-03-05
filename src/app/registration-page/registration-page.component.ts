import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Visitor } from '../models/visitor.model';
import { QrService } from '../services/qr.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
    registrationForm = this.fb.group({
      firstName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      racf: ['', Validators.compose([
        Validators.minLength(4),
        Validators.required,
        Validators.pattern('[a-zA-Z]{1}[0-9]{4}')
      ])],
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.email,
        Validators.required,
      ])],
      team: [''],
      acceptTerms: ['', Validators.required],
    });
    value: Visitor;
  constructor(private qrService: QrService, private router: Router, private fb: FormBuilder) { }

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

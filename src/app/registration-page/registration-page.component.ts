import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Visitor } from '../models/visitor.model';
import { QrService } from '../services/qr.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

    registrationForm = this.fb.group({
      firstname: ['asdf', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      lastname: ['asdf', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      racf: ['Y4072', Validators.compose([
        Validators.minLength(4),
        Validators.required,
        Validators.pattern('[a-zA-Z]{1}[0-9]{4}')
      ])],
      title: ['asdf', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      email: ['asdf@k.com', Validators.compose([
        Validators.email,
        Validators.required,
      ])],
      team: ['asdf'],
      acceptedterms: [ true, Validators.required],
    });
    value: Visitor;
    error: string;
    durationInSeconds = 5;

  constructor(
    private qrService: QrService,
    private router: Router,
    private fb: FormBuilder,
    private resgistrationService: RegistrationService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.value = {
      ...this.registrationForm.value,
      checkedin: false,
      timestamp: new Date().toDateString(),
    };
    this.resgistrationService.getUser(this.value.racf).subscribe(u => {
      if (Object.getOwnPropertyNames(u).length === 0) {
        this.value = {
          ...this.value,
          qr: JSON.stringify(this.value)
        };
        this.qrService.setQR(this.value.qr);
        this.resgistrationService.addUser(this.value).subscribe(() => {
          this.router.navigate(['/qr']);
        });
      } else {
        this.error = 'User with the RACF: ' + this.value.racf + ' already exist.';
        this.registrationForm.patchValue({racf:  null});
        this.openSnackBar(this.error, 'Dismiss');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}




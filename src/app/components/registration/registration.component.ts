import { Component, OnInit } from '@angular/core';
import { Visitor } from '../..//models/visitor.model';
import { QrService } from '../../services/qr.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from '../..//services/registration.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.fb.group({
    firstname: ['', Validators.compose([
      Validators.minLength(3),
      Validators.required
    ])],
    lastname: ['', Validators.compose([
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
    acceptedterms: [false, Validators.required],
  });
  value: Visitor;
  error: string;
  durationInSeconds = 5;
  flag = false;

  constructor(
    private qrService: QrService,
    private router: Router,
    private fb: FormBuilder,
    private resgistrationService: RegistrationService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.flag = true;
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
        this.resgistrationService.addUser(this.value).subscribe(_ => {
          this.flag = false;
          this.router.navigate(['/qr']);
        }, err => {
          this.errorMessage(err.message);
        });
      } else {
        this.errorMessage('');
      }
    }, err => {
      this.errorMessage(err.message);
    });
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  errorMessage(msg: string): void {
    this.flag = false;
    if (msg === '') {
      this.error = 'User with the RACF: ' + this.value.racf + ' already exist.';
    } else  {
      this.error = msg;
    }
    this.registrationForm.patchValue({racf:  null});
    this.openSnackBar(this.error, 'Dismiss');
  }

}

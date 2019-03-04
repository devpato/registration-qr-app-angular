import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { QrPageComponent } from './qr-page/qr-page.component';
import { CheckinPageComponent } from './checkin-page/checkin-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import {ButtonModule} from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationPageComponent,
    QrPageComponent,
    CheckinPageComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { QrPageComponent } from './components/qr-page/qr-page.component';
import { CheckinPageComponent } from './components/checkin-page/checkin-page.component';
import { WelcomePageComponent } from './components//welcome-page/welcome-page.component';

import { ButtonModule } from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { InfoPageComponent, QRDialogComponent } from './components/info-page/info-page.component';
import { HackActionsComponent } from './components/hack-actions/hack-actions.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { TeamsComponent } from './components/teams/teams.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		RegistrationPageComponent,
		QrPageComponent,
		CheckinPageComponent,
		WelcomePageComponent,
		InfoPageComponent,
		QRDialogComponent,
		HackActionsComponent,
		NavbarComponent,
		TeamsComponent,
		SponsorsComponent,
		AboutComponent,
		HeaderComponent,
		ContactComponent,
		RegistrationComponent,
		TermsConditionsComponent,
		TimelineComponent
	],
	entryComponents: [ QRDialogComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ButtonModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatExpansionModule,
		MatCheckboxModule,
		ReactiveFormsModule,
		NgxQRCodeModule,
		MatSnackBarModule,
		ZXingScannerModule,
		HttpClientModule,
		MatIconModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatToolbarModule,
		MatProgressSpinnerModule,
		FormsModule,
		MatDialogModule,
		FlexLayoutModule,
		MatMenuModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}

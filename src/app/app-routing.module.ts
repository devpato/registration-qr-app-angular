import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { CheckinPageComponent } from './components/checkin-page/checkin-page.component';
import { QrPageComponent } from './components/qr-page/qr-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { HackActionsComponent } from './components/hack-actions/hack-actions.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'checkin',
    component: CheckinPageComponent
  },
  {
    path: 'qr',
    component: QrPageComponent
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'participants',
    component: InfoPageComponent
  },
  {
    path: 'actions',
    component: HackActionsComponent
  },
  {
    path: 'terms&conditions',
    component: TermsConditionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

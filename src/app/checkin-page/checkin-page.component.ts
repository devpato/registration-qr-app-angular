import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-checkin-page',
  templateUrl: './checkin-page.component.html',
  styleUrls: ['./checkin-page.component.scss']
})
export class CheckinPageComponent implements OnInit {

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;
  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  constructor(private router: Router, private resgistrationService: RegistrationService) {}


  ngOnInit() {

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;

      // selects the devices's back camera by default
      // for (const device of devices) {
      //     if (/back|rear|environment/gi.test(device.label)) {
      //         this.scanner.changeDevice(device);
      //         this.currentDevice = device;
      //         break;
      //     }
      // }
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    console.log('Devices: ', cameras);
    this.availableDevices = cameras;
  }

  handleQrCodeResult(resultString: string) {
    this.qrResultString = resultString;
    const jsonBody = JSON.parse(resultString);
    this.resgistrationService.updateUser( {racf: jsonBody.racf, checkedin: true}).subscribe(res => {
      console.log('yay', res);
      this.router.navigate(['/welcome']);
    });
  }

  onDeviceSelectChange(selectedValue: string) {
    this.currentDevice = this.scanner.getDeviceById(selectedValue);
  }
}


//Check if person exist on registration
//Use finalize
//check if response is successful after updating
//Check if response is successful after getting item
//Check if response is succesful after adding item

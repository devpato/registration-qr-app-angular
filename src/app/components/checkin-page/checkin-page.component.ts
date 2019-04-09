import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';

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


  ngOnInit(): void {
    this.selectCamera();
    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => {
      this.qrResult = result;
    });
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  }

  selectCamera(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
      for (const device of devices) {
          if (/back|rear|environment/gi.test(device.label)) {
              this.scanner.changeDevice(device);
              this.currentDevice = device;
              break;
          }
      }
    });
  }

  displayCameras(cameras: MediaDeviceInfo[]): void {
    this.availableDevices = cameras;
  }

  handleQrCodeResult(resultString: string): void {
    if (/^[\],:{}\s]*$/.test(resultString.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
      const jsonBody = JSON.parse(resultString);
      if (jsonBody.hasOwnProperty('firstname')) {
        this.resgistrationService.updateUser( {racf: jsonBody.racf, checkedin: true}).subscribe(_ => {
          this.qrResultString = 'Verified';
          this.router.navigate(['/welcome']);
        }, _ => {
          this.qrResultString = 'Not a valid QR Code: ';
        });
      }
    } else {
      this.qrResultString = 'Not a valid QR Code. ';
    }
  }

  onDeviceSelectChange(selectedValue: string): void {
    this.currentDevice = this.scanner.getDeviceById(selectedValue);
  }
}

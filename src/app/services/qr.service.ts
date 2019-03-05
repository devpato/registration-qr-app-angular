import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private QR: string;
  constructor() { }

  setQR(qr: string) {
    this.QR = qr;
  }

  getQR(): string {
    return this.QR;
  }


}

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private QR = new BehaviorSubject<string>('');
  data = this.QR.asObservable();
  constructor() { }

  setQR(qr: string) {
    this.QR.next(qr);
  }

  getQR(): Observable<string> {
    return this.data;
  }


}

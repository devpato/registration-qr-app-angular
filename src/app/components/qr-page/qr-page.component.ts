import { Component, OnInit } from '@angular/core';
import { QrService } from '../..//services/qr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.component.html',
  styleUrls: ['./qr-page.component.scss']
})
export class QrPageComponent implements OnInit {
  elementType: 'url' | 'canvas' | 'img' = 'url';
  QR: string;
  constructor(private qrService: QrService, private router: Router) { }

  ngOnInit(): void {
    this.getQRdata();
  }

  goBack(): void  {
    this.router.navigate(['/']);
  }

  getQRdata(): void {
    this.qrService.getQR().subscribe(qr => {
      this.QR = qr;
    });
  }

}

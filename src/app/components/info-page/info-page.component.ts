import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { RegistrationService } from 'src/app/services/registration.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Visitor } from 'src/app/models/visitor.model';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {
  displayedColumns: string[] = ['racf', 'name', 'title', 'team', 'qr'];
  dataSource: MatTableDataSource<any>;
  value = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private registrationService: RegistrationService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getParticipants();
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getParticipants(): void {
    this.registrationService.getUsers().subscribe(u => {
      this.dataSource =  new MatTableDataSource(u['Items']);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(user: Visitor): void {
    this.dialog.open(QRDialogComponent, {
      width: 'auto',
      data: {
        racf: user.racf,
        name: user.firstname + ' ' + user.lastname,
        title: user.title,
        team: user.team,
        qr: user.qr
      }
    });
  }
}

@Component({
  selector: 'app-qr-dialog',
  templateUrl: 'qr-dialog.html',
  styleUrls: ['./qr-dialog.scss']
})
export class QRDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  elementType: 'url' | 'canvas' | 'img' = 'url';
  QR = this.data.qr;
}

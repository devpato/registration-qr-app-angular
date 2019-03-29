import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { RegistrationService } from 'src/app/services/registration.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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

  ngOnInit() {
    this.getParticipants();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getParticipants() {
    this.registrationService.getUsers().subscribe(u => {
      this.dataSource =  new MatTableDataSource(u.Items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });
  }

  openDialog(user: any): void {
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
})
export class QRDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

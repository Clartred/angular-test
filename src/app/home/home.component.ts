import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  leNumber = 1;

  ngOnInit(): void {
    document.body.style.background = "#cccccc";


    // this.openDialog('Ime mora biti duze od 6 karaktera.', '350px', '300px', false);
    this.openDialogs(this.leNumber)
  }

  openDialogs(number) {
    if (number === 1) {
      this.openDialog('nemam nista pametno da kazem.', '350px', '300px', false);
    } else if (number === 2) {
      this.openDialog('osim da te mnogo volim.', '350px', '300px', false);
    } else if (number === 3) {
      this.openDialog('i da jedva cekam da se vratis...', '350px', '300px', false);
    } else if (number === 4) {
      this.openDialog('...da zajedno budemo sami', '350px', '300px', false);
    } else if (number === 5) {
      this.openDialog('Mora biti da sam glup?', '350px', '300px', true);
    }
  }

  accept() {
    this.router.navigate(['kjzdfn;an;rdgoaerihgaerhglaeruiagergilrdf']);
  }

  decline() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
  }

  missclick() {
    this.router.navigate(['home-missclick']);
  }

  openDialog(text: string, height: string, width: string, action: boolean) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: width,
      height: height,
      data: text
    });

    dialogRef.afterClosed().subscribe(result => {
      this.leNumber++;

      if (action) {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ";
      } else {
        this.openDialogs(this.leNumber)
      }
    });
  }

}

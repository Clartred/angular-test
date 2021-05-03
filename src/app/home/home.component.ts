import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  accept(){
    this.router.navigate(['kjzdfn;an;rdgoaerihgaerhglaeruiagergilrdf']);
  }

  decline(){
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
  }

  missclick(){
    this.router.navigate(['home-missclick']);
  }

}

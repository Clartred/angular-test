import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-missclick',
  templateUrl: './home-missclick.component.html',
  styleUrls: ['./home-missclick.component.css']
})
export class HomeMissclickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = "#cccccc";
  }

}

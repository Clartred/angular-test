import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() value: number;
  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log('value: ', this.value);
  }

}

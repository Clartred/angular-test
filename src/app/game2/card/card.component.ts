import { Component, Input, OnInit } from '@angular/core';
import { PlayCard } from '../../model/play-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: PlayCard;

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.card.isShown = !this.card.isShown;
  }

}

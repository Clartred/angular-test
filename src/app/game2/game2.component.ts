import { Component, OnInit } from '@angular/core';
import { PlayCard } from '../model/play-card';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

  cards: PlayCard[] = [];
  playerClosedCards: PlayCard[] = [];
  babuskaClosedCards: PlayCard[] = [];
  playerOpenCards: PlayCard[] = [];
  babuskaOpenCards: PlayCard[] = [];
  middleCards: PlayCard[] = [];
  grayCardUrl = "../../../assets/game2/cards/Gray_back.jpg";
  redCardUrl = "../../../assets/game2/cards/Red_back.jpg";
  closedCardValue = 0;

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = "#cccccc";
    this.initCards();
    this.splitCardsIntoTwoDecks(this.cards);
  }

  playerClosedCardClick() {
    this.playerOpenCards.push(this.playerClosedCards[0]);
    this.playerClosedCards.shift();
  }

  babuskaClosedCardClick() {
    this.babuskaOpenCards.push(this.babuskaClosedCards[0]);
    this.babuskaClosedCards.shift();
  }

  initCards() {
    let signs = ['C', 'D', 'H', 'S']
    for (let i = 0; i <= 3; i++) {

      for (let j = 1; j <= 14; j++) {
        if (j === 11) {
          continue;
        }
        let url = '../../../assets/game2/cards/' + j + signs[i] + '.jpg';
        this.cards.push(new PlayCard(j, url));
      }
    }
  }

  splitCardsIntoTwoDecks(array) {
    let shuffledArray = this.shuffle(array);
    for (let i = 0; i < shuffledArray.length; i++) {
      if (i % 2 === 0) {
        this.playerClosedCards.push(shuffledArray[i]);
      } else {
        this.babuskaClosedCards.push(shuffledArray[i]);
      }
    }
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}

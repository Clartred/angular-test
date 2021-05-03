import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Question } from '../model/question';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

  questions: Question[] = [];
  currentQuestion = 0;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filloutQuestions();
  }

  answer(answer: number) {
    let correctAnswer = this.questions[this.currentQuestion].correctAnswer;
    let answerId = "answer-" + answer;

    if (correctAnswer === 0) {
      this.setAllBordersGreen();
      this.toTheNextQuestion();
      return;
    }
    let answerIsCorrect = correctAnswer === answer;
    let borderColor = answerIsCorrect ? 'green' : 'red';
    this.setBorderColor(answerId, borderColor);
    if (answerIsCorrect) {
      this.toTheNextQuestion();
    } else {
      alert("Get the fuck out! We're elitist!");
      this.router.navigate(['you-died']);
    }
  }

  setBorderColor(id, color) {
    document.getElementById(id).style.border = "5px solid " + color;
    document.getElementById(id).style.borderRadius = "12px";
  }

  setAllBordersGreen() {
    this.setBorderColor("answer-1", "green");
    this.setBorderColor("answer-2", "green");
    this.setBorderColor("answer-3", "green");
    this.setBorderColor("answer-4", "green");
  }

  toTheNextQuestion() {
    setTimeout(() => {
      if(this.currentQuestion+1 === this.questions.length){
        this.router.navigate(['dfhsjktdyjshgdzghftfd;;3']);
      }
      this.currentQuestion++;
      this.resetBorders();
    }, 1500)
  }

  resetBorders() {
    document.getElementById("answer-1").style.border = "none";
    document.getElementById("answer-2").style.border = "none";
    document.getElementById("answer-3").style.border = "none";
    document.getElementById("answer-4").style.border = "none";
  }

  filloutQuestions() {
    this.questions.push(
      new Question(
        "Tell me what language is this? \n bla dur bulru rabi azra slufh?",
        "Dutch", "English", "Orcish", "only creed knows", 4
      ),
      new Question(
        "Koja je Miloseva omiljena torta?",
        "Madjarica", "Rumunka", "Vlajna", "Cokoladna", 1
      ),
      new Question(
        "Kog datuma u mesecu se slavi 1. maj?",
        "8. mart", "1. maj", "31. decembar", "29. februar", 2
      ),
      new Question(
        "Kad te klao Tuta Bugarin?",
        "Petak", "Veliki utorak", "Cetvrtak", "ne secam se", 0
      )
    )
  }

}

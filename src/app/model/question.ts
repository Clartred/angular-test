export class Question {
    questionText: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correctAnswer: number;

    constructor(
        q: string,
        a1: string,
        a2: string,
        a3: string,
        a4: string,
        ca: number
    ) {
        this.questionText = q;
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
        this.correctAnswer = ca;
    }
}

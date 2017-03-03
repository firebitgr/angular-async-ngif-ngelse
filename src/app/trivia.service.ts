import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class TriviaService {

  questions$ = Observable.of([{
      "category": "Science: Mathematics",
      "type": "boolean",
      "difficulty": "medium",
      "question": "The Pythagorean theorem states that the square of the hypotenuse is equal to the product of the squares of the other two sides.",
      "correct_answer": "False",
      "incorrect_answers": ["True"]
  }, {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "medium",
      "question": "Super Mario Bros. was released in 1990.",
      "correct_answer": "False",
      "incorrect_answers": ["True"]
  }, {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Before Super Smash Bros. contained Nintendo characters, what was it known as internally?",
      "correct_answer": "Dragon King: The Fighting Game",
      "incorrect_answers": ["Contest of Champions", "Smash and Pummel", "Fighter of the Ages: Conquest"]
  }, {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "On Twitter, what is the character limit for a Tweet?",
      "correct_answer": "140",
      "incorrect_answers": ["120", "160", "100"]
  }, {
      "category": "Entertainment: Television",
      "type": "multiple",
      "difficulty": "easy",
      "question": "In Game of Thrones, what is Littlefinger&#039;s real name?",
      "correct_answer": "Petyr Baelish",
      "incorrect_answers": ["Podrick Payne", "Lancel Lannister", "Torrhen Karstark"]
  }]);

  constructor() { }

  getQuestions() {
    return this.questions$;
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class TriviaService {

  question$ = Observable.of({
      "category": "Science: Mathematics",
      "type": "boolean",
      "difficulty": "medium",
      "question": "The Pythagorean theorem states that the square of the hypotenuse is equal to the product of the squares of the other two sides.",
      "correct_answer": "False",
      "incorrect_answers": ["True"]
  })
  .delay(2000);

  constructor() { }

  getQuestions() {
    return this.question$;
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TriviaService } from './trivia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  question$: Observable<any>;

  constructor(private trivia:TriviaService) { }

  ngOnInit() {
    this.question$ = this.trivia.getQuestion();
  }
}

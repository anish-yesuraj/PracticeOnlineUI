import { Component, OnInit } from '@angular/core';
import {Question} from './Question';
import {AnswerChoice} from './AnswerChoice';
import { CaptureDataService } from './capture-data.service';

@Component({
  selector: 'app-capture-data',
  templateUrl: './capture-data.component.html',
  styleUrls: ['./capture-data.component.css']
})
export class CaptureDataComponent implements OnInit {

  questions : Question[];

  constructor(private _captureDataService : CaptureDataService) { }

  ngOnInit() : void {
    this.getAllQuestions();
  }

  getAllQuestions () : void {
    this._captureDataService.getAllQuestions()
    .subscribe(
        (allQuestions) => {
          this.questions = allQuestions;
          console.log(allQuestions);
        }, 
        (error) => {
          console.log(error);
        });
  }

}

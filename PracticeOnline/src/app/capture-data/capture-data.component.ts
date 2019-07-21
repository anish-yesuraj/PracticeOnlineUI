import { Component, OnInit, ElementRef, ViewChild, QueryList } from '@angular/core';
import {Question} from '../ay-model/Question';
import {AnswerChoice} from '../ay-model/AnswerChoice';
import {Subject} from '../ay-model/Subject';
import { CaptureDataService } from './capture-data.service';

export interface DropDownMaster {
  optionId : string;
  optionName : string;
}

@Component({
  selector: 'app-capture-data',
  templateUrl: './capture-data.component.html',
  styleUrls: ['./capture-data.component.css']
})

export class CaptureDataComponent implements OnInit {

  newQuestionForm : Question;
  newAnswerChoice : AnswerChoice;

  subjects : Subject[];
  questions : Question[];
  levels : DropDownMaster[] = [
    {optionId : "L01", optionName : "Beginner"},
    {optionId : "L02", optionName : "Easy"},
    {optionId : "L03", optionName : "Normal"},
    {optionId : "L04", optionName : "Hard"},
    {optionId : "L05", optionName : "Challenging"},
  ];
  topics : DropDownMaster[] = [
    {optionId : "T001", optionName : "Topic # 1"},
    {optionId : "T002", optionName : "Topic # 2"},
    {optionId : "T003", optionName : "Topic # 3"},
    {optionId : "T004", optionName : "Topic # 4"},
    {optionId : "T005", optionName : "Topic # 5"},
  ];
  exams : DropDownMaster[]=[
    {optionId : "E001", optionName : "Exam # 1"},
    {optionId : "E002", optionName : "Exam # 2"},
    {optionId : "E003", optionName : "Exam # 3"},
    {optionId : "E004", optionName : "Exam # 4"},
    {optionId : "E005", optionName : "Exam # 5"},
  ];
  sources : DropDownMaster[]=[
    {optionId : "S001", optionName : "Source # 1"},
    {optionId : "S002", optionName : "Source # 2"},
    {optionId : "S003", optionName : "Source # 3"},
    {optionId : "S004", optionName : "Source # 4"},
    {optionId : "S005", optionName : "Source # 5"},
  ];

  fileToUpload : File = null ;

  @ViewChild('questionImage', {static: false}) questionImage: ElementRef;
  @ViewChild('choiceImage', {static: false}) choiceImages: QueryList<ElementRef>;

  addChoiceRow()
  {
      this.newQuestionForm.answerChoices.push(this.newAnswerChoice);
  }

  onPaste(event: any) {
    const items = event.clipboardData.items;
    let blob = null;

    for (const item of items) {
      if (item.type.indexOf('image') === 0) {
        blob = item.getAsFile();
      }
    }

    // load image if there is a pasted image
    if (blob !== null) {
      const fileFromBlob: File = new File([blob], 'your-filename.jpg');
      const reader = new FileReader();
      reader.onload = (evt: any) => {
        console.log(evt.target.result); // data url!
        this.questionImage.nativeElement.src = evt.target.result;
        this.newQuestionForm.imagePath = evt.target.result;
      };
      reader.readAsDataURL(blob);
    }
  }


  constructor(private _captureDataService : CaptureDataService) {
    this.newQuestionForm = new Question();
    this.newAnswerChoice = new AnswerChoice();
   }

  ngOnInit() : void {
    this.getAllQuestions();
    this.getAllSubjects();

  }

  handleFileInput(file : FileList)
  {
    this.fileToUpload = file.item(0);

    //Show Preview
    var reader = new FileReader();
    reader.onload = (event : any) => {
      this.newQuestionForm.imagePath = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  getAllQuestions () : void {
    this._captureDataService.getAllQuestions()
    .subscribe(
        (allQuestions) => {
          this.questions = allQuestions;
        }, 
        (error) => {
          console.log(error);
        }
      );
  }

  getAllSubjects () : void {
    this._captureDataService.getAllSubjects()
    .subscribe(
      (allSubjects) => {
        this.subjects = allSubjects;
        console.log(allSubjects);
      },
      (error) => {console.log(error);}
    );
  }




}

import {AnswerChoice} from './AnswerChoice';

export class Question {
    id : string;
    subject : string;
    topic : string;
	level : string;
	text : string;
	tip : string;
	active : boolean = true; //TODO Activate (Slide toggle) by default for new Question
	imagePath : string = "../assets/images/image-preview.svg"; //TODO Load a default image background
    imageTip : string;
    answerExplanation : string;
    sourceId : string;
    examTag : string;
    answerChoices : AnswerChoice[] = [];
}
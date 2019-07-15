import {AnswerChoice} from './AnswerChoice';

export class Question {
    id : string;
    subject : string;
    topic : string;
	level : string;
	text : string;
	tip : string;
	active : boolean;
	imagePath : string;
    imageTip : string;
    answerChoices : AnswerChoice[];
}
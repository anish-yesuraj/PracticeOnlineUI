export class AnswerChoice {

	id: string;
	text: string;
	tip: string;
	result: boolean = false;  //TODO Set default isCorrectAnswer as false
	active: boolean = true;  //TODO Default active true
	imagePath: string = "../assets/images/image-preview.svg"; //TODO Load a default image background
	imageTip: string;

}
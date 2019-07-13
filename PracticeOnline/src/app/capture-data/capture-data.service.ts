import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from './Question';
import {AnswerChoice} from './AnswerChoice';
import {map, catchError} from 'rxjs/operators';


@Injectable()
export class CaptureDataService {
    constructor (private _httpService:Http){}

    getAllQuestions() : Observable<Question[]>
    {
        return this._httpService.get("http://localhost:8080/PracticeOnline/GetAllQuestions")
        .pipe(map((response) => {return response.json()}), catchError(this.handleError));
    }

    private handleError (response : Response){
        return Observable.throw(response);
    }
}
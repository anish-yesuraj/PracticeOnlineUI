import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../ay-model/Question';
import {AnswerChoice} from '../ay-model/AnswerChoice';
import {map, catchError} from 'rxjs/operators';
import { Subject } from '../ay-model/Subject';


@Injectable()
export class CaptureDataService {
    constructor (private _httpService:Http){}

    getAllQuestions() : Observable<Question[]>
    {
        return this._httpService.get("http://localhost:8080/WeWinAPI/GetAllQuestions")
        .pipe(map((response) => {return response.json()}), catchError(this.handleError));
    }

    getAllSubjects() : Observable<Subject[]>
    {
        return this._httpService.get("http://localhost:8080/WeWinAPI/GetAllSubjects")
        .pipe(map((response => {return response.json()})), catchError(this.handleError));
    }

    private handleError (response : Response){
        return Observable.throw(response);
    }
}
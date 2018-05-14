import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RestProvider {
  	
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
    
    private apiUrl = "https://restcountries.eu/rest/v2/";

  	getCountries(): Observable<{}> {
  		return this.http.get(this.apiUrl+'all').pipe(
    		map(this.extractData),
    		catchError(this.handleError)
  		);
	}

	getByCode(code: any): Observable<{}> {
  		return this.http.get(this.apiUrl+"alpha/"+code).pipe(
    		map(this.extractData),
    		catchError(this.handleError)
  		);
	}

  getNasaDaily(): Observable<{}> {
    return this.http.get("https://api.nasa.gov/planetary/apod?api_key=tvLKukfbDnfyuyVM17XQWDjH3H7mi7iYI2iJRokA").pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

	private extractData(res: Response) {
  		let body = res;
  		return body || { };
	}

	private handleError (error: Response | any) {
  		let errMsg: string;
  		if (error instanceof Response) {
    		const err = error || '';
    		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  		} else {
    		errMsg = error.message ? error.message : error.toString();
  		}
  		console.error(errMsg);
  		return Observable.throw(errMsg);
	}

}

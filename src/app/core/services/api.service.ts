import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { JwtService } from './jwt.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	// Http Options default
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,POST',
			'Access-Control-Allow-Headers': 'Content-Type'
		})
	};
	constructor(private http: HttpClient, private jwtService: JwtService) {}

	private formatErrors(error: any) {
		return throwError(error.error);
	}

	GET(path: string, params: HttpParams = new HttpParams()): Observable<any> {
		return this.http
			.get(path, { params })
			.pipe(catchError(this.formatErrors));
	}

	PUT(path: string, body: any = {}): Observable<any> {
		return this.http
			.put(path, JSON.stringify(body))
			.pipe(catchError(this.formatErrors));
	}

	POST(path: string, body: any = {}): Observable<any> {
		return this.http
			.post(path, JSON.stringify(body), this.httpOptions)
			.pipe(catchError(this.formatErrors));
	}

	DELETE(path: string): Observable<any> {
		return this.http.delete(path).pipe(catchError(this.formatErrors));
	}
}

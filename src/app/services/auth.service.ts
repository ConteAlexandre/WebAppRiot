import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import {Client} from '../models';

const apiUrl = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Client>;
  public currentUser: Observable<Client>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Client>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Client {
    return this.currentUserSubject.value;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }


  login(username: string, password: string) {
    return this.http.post<Client>(apiUrl + 'api/login', {username, password})
      .pipe(map(
        clientData => {
          localStorage.setItem('currentUser', JSON.stringify(clientData));
          return clientData;
        }
        ),
        catchError(this.handleError<Client>('errorLogin')));
  }


  isUserLoggedIn() {
    const user = localStorage.getItem('currentUser');
    console.log(!(user === null));
    return !(user === null);
  }


  logout() {
    localStorage.removeItem('currentUser');
  }

  register(identifiant: Client) {
    return this.http.post<Client>(apiUrl + '/signup', identifiant);
  }
}

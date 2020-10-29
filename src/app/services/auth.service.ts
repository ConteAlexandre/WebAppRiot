import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import {stringify} from 'querystring';
import {arrayify} from 'tslint/lib/utils';
import {Client} from '../models';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
    .append('Access-Control-Allow-Origin', '*')
    .append('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-Auth')
};

const apiUrl = 'http://localhost:8000/';

export class JwtResponse {
  constructor(
    public jwttoken: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  login(identifiant: Client) {
    return this.http.post<Client>(apiUrl + '/login', identifiant)
      .pipe(map(
        userData => {
          sessionStorage.setItem('email', identifiant.email);
          const tokenStr = 'Bearer ' + userData.token;
          const decode = jwt_decode(tokenStr);
          sessionStorage.setItem('role', decode.role);
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      ));
  }

  // tslint:disable-next-line:typedef
  isUserLoggedIn() {
    const user = sessionStorage.getItem('token');
    console.log(!(user === null));
    return !(user === null);
  }

  // tslint:disable-next-line:typedef
  logout() {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('token');
  }

  // tslint:disable-next-line:typedef
  register(identifiant: Client) {
    return this.http.post<Client>(apiUrl + '/signup', identifiant);
  }
}

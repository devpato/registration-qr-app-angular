import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Visitor } from '../models/visitor.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  BASE_URL = 'https://0sft838xbc.execute-api.us-east-1.amazonaws.com/hackathon';
  getUsers() {
    return this.http.get<Visitor>(this.BASE_URL);
  }

  getUser(racf: string) {
    let params = new HttpParams();
    params = params.append('racf', racf);
    return this.http.get<Visitor>(this.BASE_URL, {params});
  }

  addUser(user: Visitor) {
    return this.http.post(this.BASE_URL + '/addUser/', user);
  }

  updateUser(user: {}) {
    return this.http.put(this.BASE_URL + '/updateuser/', user);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}

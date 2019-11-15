import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user_node } from '../models/users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  public getUsers()
  {
    return this.http.get('http://localhost:3000/');
  }

  public getUser(us : string)
  {
    return this.http.get('http://localhost:3000/' + us);
  }

  public addUser(un: user_node) 
  {
    return this.http.post('http://localhost:3000', un);
  }
}

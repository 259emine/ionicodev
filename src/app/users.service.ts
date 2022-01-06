import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = "https://reqres.in/api/";

  constructor(private httpClient:HttpClient) { }


getUsers()
  {
    return this.httpClient.get(this.URL + 'users');
  }

}

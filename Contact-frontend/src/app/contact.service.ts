import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from './contact';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseurl="http://localhost:9020/api/v1";
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  username:string;
  password:string;

  constructor(private http:HttpClient) { }

  authenticationService(username:string,password:string)
  {
    
    return this.http.get(`${this.baseurl}/user/auth`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        
        this.registerSuccessfulLogin(username, password);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    sessionStorage.setItem('token','Basic '+window.btoa(username+":"+password));
    return 'Basic '+window.btoa(username+":"+password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return '';
    return user;
  }

  register(user:User):Observable<Object>{
    return this.http.post(`${this.baseurl}/user/register`,user);
  }

  getUser(username:string):Observable<User>{
    return this.http.get<User>(`${this.baseurl}/user/${username}`);
  }

  addContact(contact:Contact,uid:number):Observable<object>{
    return this.http.post(`${this.baseurl}/contact/add/${uid}`,contact);
  }

  getcontacts(id:number):Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.baseurl}/contact/all/${id}`);
  }

}

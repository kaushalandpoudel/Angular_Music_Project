import { Injectable } from '@angular/core';
import { LoginFormComponent } from '../middle-section/login-form/login-form.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import {AuthGuard} from './auth-guard.service';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private _http: HttpClient, private auth: AuthGuard) { }

  setUser(formData){

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };    
    return this._http.post("http://localhost:3000/sign_up", formData, httpOptions);
  }


  login(formData){
    
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:3000/login", formData, httpOptions);  
  
  
  }

  upload(formData){
    console.log('backend ma ayo');
    console.log(formData);
    
    
    if(this.auth.canActivate()){
      let token = localStorage.getItem('token') 
      let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
      return this._http.post("http://localhost:3000/upload", formData, httpOptions); 
    }
    
  }

  addtoPlaylist(data){
    if(this.auth.canActivate()){
      let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
      let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
      return this._http.post("http://localhost:3000/addtoPlaylist", data, httpOptions); 
    } 
  }

  most_listened(){

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd"; 
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:3000/most_listened",  httpOptions); 
  
  }

  recentlyAdded(){

    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd"; 
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:3000/recently_added",  httpOptions); 
    
  }

  playlist(tempObject){
    if(this.auth.canActivate()){
      let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
      let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
      return this._http.post("http://localhost:3000/playlist",tempObject, httpOptions); 
    }

  }

  increaseListens(tempSong){
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:3000/increaseListens",tempSong, httpOptions);
  }

  search(tempSearchTopic){
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:3000/search",tempSearchTopic, httpOptions);
  }

}
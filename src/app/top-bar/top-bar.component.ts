import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import {BackendService} from '../services/backend.service';
import {DataService} from '../services/data.service';
import {CanActivate, Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  private search: any;
  private loggedIn: boolean = false;

  searchTopic(searchInput){
    this.search =  searchInput;
    console.log(this.search);
    this._router.navigate(['/recent']);

    this.data.changeSearch(this.search);
    console.log('added to search');
    
    this.data.currentSearch.subscribe(message => {
      console.log(message);
      
    });
    this._router.navigate(['/search']);
  
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    this.data.changeToken(localStorage.getItem('token'));
    this._router.navigate(['/most_listened']);

  }

  constructor( private _backendService: BackendService, private data: DataService, private _router: Router) { 

    
    this.data.currentToken.subscribe(token =>{
      console.log(token);
      
      if(token){
        this.loggedIn = true;
      }else{
        this.loggedIn = false;
      }
    });
  }

  ngOnInit() {
    this.data.changeToken(localStorage.getItem('token'));

  }

}

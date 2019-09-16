import { Component, OnInit, OnDestroy} from '@angular/core';
import {Router, Route} from '@angular/router';
import { log } from 'util';
import {BackendService} from '../../services/backend.service';
import {DataService} from '../../services/data.service';
import {moveIn, fallIn} from '../../router.animations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]':''}
})
export class LoginFormComponent implements OnInit, OnDestroy {

  error: boolean = false;
  errorMessage: string = "";
  private querySubscription;
  dataLoading: boolean = false;
  savedChanges: boolean = false;

  constructor( private _backendService: BackendService, private _route: Router, private data: DataService) { }

  ngOnInit() {
     if(localStorage.getItem('token')) this._route.navigate(['/most_listened']);
  }

  login(formData){
    this.dataLoading = true;
    this.data.changeUserName(formData.userName);
    this.querySubscription = this._backendService.login(formData).subscribe(
      (res) => {
        if (res['errorCode'] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          window.localStorage.setItem('token', res['data'].token);
          window.localStorage.setItem('userName', formData.userName);
          this.data.changeToken(localStorage.getItem('token'));
          this._route.navigate(['/recent']);
        } else {
          this.error = true;
          this.errorMessage = res['errorMessage'];
          this.dataLoading = false;
        }
      },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
      });
  }

  ngOnDestroy(){
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
  }
  }


}

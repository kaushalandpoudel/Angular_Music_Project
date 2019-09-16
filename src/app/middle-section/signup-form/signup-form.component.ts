import { Component, OnInit, OnDestroy} from '@angular/core';
import {Router, Route} from '@angular/router';
import { log } from 'util';
import {BackendService} from '../../services/backend.service';
import {moveIn, fallIn} from '../../router.animations';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]':''}
})
export class SignupFormComponent implements OnInit, OnDestroy{
  error: boolean = false;
  errorMessage: string = "";
  private querySubscription;
  dataLoading: boolean = false;
  savedChanges: boolean = false;

  constructor(   private _backendService: BackendService, private _route: Router) { }

  ngOnInit() {
  }

  setUser(formData){
    this.dataLoading = true;
    this.querySubscription = this._backendService.setUser(formData).subscribe(
      (res) =>{
        if(res['errorCode']>0){
          this.error = false;
          this.savedChanges = true;
          this.dataLoading = false;
        }else{
          this.error = true;
          this.errorMessage = res['errorMessage'];
          this.dataLoading = false;
          
        }
      },(error)=> {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },()=>{
        this.dataLoading = false;
      }
    );  

    
  }
  
  ngOnDestroy(){
    if(this.querySubscription){
      this.querySubscription.unsubscribe();
    }
  }

}

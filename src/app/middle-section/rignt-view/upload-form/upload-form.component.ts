import { Component, OnInit, OnDestroy} from '@angular/core';
import {Router, Route} from '@angular/router';
import { log } from 'util';
import {BackendService} from '../../../services/backend.service';

import { AngularFireStorage, AngularFireStorageModule, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {moveIn, fallIn} from '../../../router.animations';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]':''}
})
export class UploadFormComponent implements OnInit   {

  error: boolean = false;
  errorMessage: string = "";
  private querySubscription;
  dataLoading: boolean = false;
  savedChanges: boolean = false;
  file: File;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  url: Observable<string>;
  tempFormData: any;
  uploadComplete:boolean = false;
  tempSongData: any;

  constructor(private _backendService: BackendService, private _route: Router,private afStorage: AngularFireStorage) { }

  ngOnInit() {
    if(!localStorage.getItem('token')) this._route.navigate(['/login']);
  }

  onFileSelected(event){
     this.file = event.target.files[0]; 

  }

  uploadSong(formData){

    console.log(formData);
    
    this.tempSongData = formData;
    this.dataLoading = true;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id)
    console.log(this.ref);
    this.task = this.ref.put(this.file);
    this.task.snapshotChanges().pipe(
       finalize(() => {
         this.ref.getDownloadURL().subscribe(url => {
            this.url= url
            console.log(this.url)
            this.uploadComplete = true;

         });
     })
     ).subscribe(result=>{
      
       if(result.bytesTransferred == result.totalBytes){
        
      }
       
  });
  }


  load(){
    console.log("load works");
    
  }

  uploadSongDetails (){
    
    this.tempSongData.link = this.url;

    console.log(this.tempSongData);
     
     this.querySubscription = this._backendService.upload(this.tempSongData).subscribe(
              (res) => {
                if (res['errorCode'] > 0) {
                  this.error = false;
                  this.errorMessage = "";
                  this.dataLoading = false;
                  
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


  checker(formData){
    this.querySubscription = this._backendService.upload(formData).subscribe(
      (res) => {
        if (res['errorCode'] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          
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

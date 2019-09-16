import { Component, OnInit,   } from '@angular/core';
import { log } from 'util';
import {DataService} from '../services/data.service';
import {BackendService} from '../services/backend.service';
import { finalize } from 'rxjs/operators';
import {Router, Route} from '@angular/router';
import { Observable, Observer } from 'rxjs';
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {
  myModel: 0;
  msbapTitle : 'Audio Title';
  msbapDisplayTitle :false; 
  audioUrl: string;
  tempSong;
  index: number;
  error: string;
  onPlaylist = false;
  addedToPlaylist = false;
  constructor( private data: DataService, private _backendService: BackendService,private _route: Router, private _snackBar: MatSnackBar) { }
  private title;
  color: 'warn';
  private querySubscription;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['snackbar']
    });
  }

  ngOnInit() {
    
    this.data.currentSongs.subscribe(message => {
      this.audioUrl = message.link;
      this.title = message.title;
      this.onPlaylist = false;
      this.addedToPlaylist = false;
      this._backendService.increaseListens(message).subscribe(
        (res) =>{
          if(res['errorCode']>0){
  
          }else{ 
  
          }
        },(error)=> {
  
        },()=>{
  
        }
      );
    });

    this.data.currentIndex.subscribe(index => {
      this.index = index;
      // this.audioUrl = this.songs[this.index].link;
    });

    console.log(this.tempSong);
    

  
  }

  linkSong(){
    // console.log(this.songs[this.index].link);
    this.index ++;
    console.log(this.index); 
  }

  nextSong(){
    var tempLength;
    this.data.currentPlayingSong.subscribe(songList =>{
         tempLength = songList.length;
    });
    
    if(this.index != tempLength-1){
      this.index ++;
      this.data.currentPlayingSong.subscribe(songList =>{
        this.data.changeSongs(songList[this.index]);
        this.data.changeIndex(this.index);   
      });
    }
  }

  previousSong(){
    if(this.index!=0){
      this.index --;
      this.data.currentPlayingSong.subscribe(songList =>{
        this.data.changeSongs(songList[this.index]);
        this.data.changeIndex(this.index);   
      });
    }
  }

  addtoPlaylist(){
    var tempSong;
    var exist = true;

    if(!localStorage.getItem('token')) this._route.navigate(['/login']);

    this.data.currentSongs.subscribe(message => {
      tempSong = message;
    });

    tempSong.userName = localStorage.getItem('userName');

    var tempObject = [{
      userName : localStorage.getItem('userName')
    }]
    
    this.querySubscription = this._backendService.addtoPlaylist(tempSong).subscribe(
      (res) =>{
        if(res['errorCode']>0){
          console.log('success');
          this.addedToPlaylist = true;
          
        }else{ 
          console.log('error');
          this.openSnackBar('Already on the Playlist!', '');
          this.onPlaylist = true;

          
        }
      },(error)=> {

      },()=>{

      }
    );  

  }



}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router, Route} from '@angular/router';
import { log } from 'util';
import {BackendService} from '../../../services/backend.service';
import {DataService} from '../../../services/data.service';
import {AudioPlayerComponent} from '../../../audio-player/audio-player.component';
import {moveIn, fallIn} from '../../../router.animations';

@Component({
  selector: 'app-middle-view',
  templateUrl: './middle-view.component.html',
  styleUrls: ['./middle-view.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]':''}
})
export class MiddleViewComponent implements OnInit {

  songs: any[] = [];
  private querySubscription;
  index: number;
  constructor( private route: ActivatedRoute,private router: Router, private _backendService: BackendService, private _route: Router, private data: DataService ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }
  
  clickHandle(index){
    console.log(this.songs[index]);
    this.index = index;
    console.log(index);
    this.data.changeIndex(index);
    this.data.playingSongs(this.songs);
    this.data.changeSongs(this.songs[index]);  
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      switch(data.kind){
        case "playlist":
          
          var tempUserName;
          var userName;
          this.data.currentUserName.subscribe(message => {
            tempUserName = message;
          });
          var tempObject = [{
            userName : localStorage.getItem('userName')
          }]
          this.querySubscription = this._backendService.playlist(tempObject).subscribe(
            (res) => {
              if (res['errorCode'] > 0) {
                console.log(res['data']);

                this.songs = res['data'];
                console.log(this.songs);
                this.data.changeSongList(this.songs);
                
                
                
              } else {
              }
            },
            (error) => {
            },
            () => {
            });

          break;
        case "most_listened":
          
          this.querySubscription = this._backendService.most_listened().subscribe(
            (res) => {
              if (res['errorCode'] > 0) {
                console.log(res['data']);

                this.songs = res['data'];
                console.log(this.songs);
                this.data.changeSongList(this.songs); 
                
              } else {
              }
            },
            (error) => {
            },
            () => {
            });

          break;
        case "recent":
          
          this.querySubscription = this._backendService.recentlyAdded().subscribe(
            (res) => {
              if (res['errorCode'] > 0) {
                console.log(res['data']);

                this.songs = res['data'];
                console.log(this.songs);
                this.data.changeSongList(this.songs);
                     
              } else {
              }
            },
            (error) => {
            },
            () => {
            });

          break;

          case "search":
            var tempObject2;
            
            this.data.currentSearch.subscribe(message =>{
              tempObject2 = [{
                search : message
              }]
            })
            
            this._backendService.search(tempObject2).subscribe(
              (res) => {
                if (res['errorCode'] > 0) {
                  console.log(res['data']);
                  this.songs = res['data'];
                  this.data.changeSongList(res['data']); 
                } else {
                }
              },
              (error) => {
              },
              () => {
              });

            break;

      }
    });
    
  }

}

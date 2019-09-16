import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private songsSource = new BehaviorSubject<any>({
    album: "Awesome",
    artist : "Chaka Khan",
    link : "https://firebasestorage.googleapis.com/v0/b/music-project-7e5d2.appspot.com/o/5qs1qoif6t4?alt=media&token=7a789fed-8b6c-4209-8d93-36ceb302615b",
    listens : null,
    title: "A Night In Tunisia",
    uploaddate: "2019-06-22T11:49:17.000Z"
  });
  private songIndex = new BehaviorSubject<number>(0);
  private url = new BehaviorSubject<any>('');
  private songList = new BehaviorSubject<any>('');
  private playingSong = new BehaviorSubject<any>('');
  private userName = new BehaviorSubject<string>('');
  private search = new BehaviorSubject<string>('');
  private token = new BehaviorSubject<string>('');
  currentSongs = this.songsSource.asObservable();
  currentIndex = this.songIndex.asObservable();
  currentUrl = this.url.asObservable();
  currentSongList = this.songList.asObservable();
  currentUserName = this.userName.asObservable();
  currentPlayingSong = this.playingSong.asObservable();
  currentSearch = this.search.asObservable();
  currentToken = this.token.asObservable();

  
  constructor() { }

  changeSongs(message: object){
    this.songsSource.next(message);
  }

  changeIndex(message: number){
    this.songIndex.next(message);
  }

  changeSongList(message: object){
    this.songList.next(message);
  }

  changeUserName(message: string){
    this.userName.next(message);
  }

  playingSongs(message: object){
    this.playingSong.next(message);
  }

  changeSearch(message: string){
    this.search.next(message);
  }

  changeToken(message: string){
    this.token.next(message);
  }
}

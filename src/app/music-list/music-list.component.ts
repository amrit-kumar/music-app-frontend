import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MusicService} from "../services/service.music";
@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  public musicList:any;
  public paginationCount:number;
  public arr=[]
  public search=''

  constructor( private _router :Router, private getMusicList: MusicService) { }

  ngOnInit() {
    this.getMusicList.getMusicLIst().subscribe(result=>{
      console.log(result,'oooopopp')
        this.musicList = result;
      this.paginationCount= Math.ceil(this.musicList.count/6)
      for(let i=0; i<2;i++){
        this.arr.push(i+1)

      }
    });


  }
  addTrack(){
    this._router.navigate(['addtrack'])
  }
  nextPage(page){
    this.getMusicList.nextPage(page).subscribe(res=>{
      this.musicList = res;
    })
  }

  searchMusic(){
    this.getMusicList.searchMusic(this.search).subscribe(res=>{
      this.musicList=res
    })
  }
  openGenre(){
    this._router.navigate(['genre'])

  }
  editTrack(id){

    this._router.navigate(['edittrack',id])
  }
}

import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {GenreService} from "../services/service.genre";
import {MusicService} from "../services/service.music";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  public genreLIst:any;
  public new_genre:any


  constructor(private router:Router,private ms:MusicService ,private activatedRoute:ActivatedRoute) { }


  ngOnInit() {

    this.genreLIst=this.ms.getGenre()


  }
  addNewGenre()
  {
    this.ms.addGenre({name:this.new_genre}).subscribe(res=>{
      this.genreLIst=this.ms.getGenre()
    })


  }

}

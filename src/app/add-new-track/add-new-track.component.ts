import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {MusicService} from "../services/service.music";
import {URLS} from "../common/url-constant";

@Component({
  selector: 'app-add-new-track',
  templateUrl: './add-new-track.component.html',
  styleUrls: ['./add-new-track.component.css']
})
export class AddNewTrackComponent implements OnInit {
  public addtrackform: FormGroup;
  public iserror: boolean = false;
  public genre :any
  public title:any
  constructor(private builder: FormBuilder,
              private musicservice: MusicService, private route: Router,
              private activatedroute: ActivatedRoute) {
  }

  ngOnInit() {
    this.genre=this.musicservice.getGenre()
    this.addtrackform = this.builder.group({
      music_title: new FormControl("", [Validators.required]),
      music_rating: new FormControl("", [Validators.required]),
      music_genre: new FormControl([], [Validators.required]),

    });
    console.log(this.activatedroute.snapshot,'ppppppp')
    if(typeof this.activatedroute.snapshot.params.id === 'undefined'){
      this.title = "ADD NEW TRACK"
    }
    else{
      this.title="EDIT TRACK"

      this.musicservice.getTrack(this.activatedroute.snapshot.params.id).subscribe(res=>{
        console.log(res.title,'pppppp')
        this.addtrackform = this.builder.group({
          music_title: new FormControl(res.title, [Validators.required]),
          music_rating: new FormControl(res.rating, [Validators.required]),
          music_genre: new FormControl(res.genre, [Validators.required]),

        })
      })
    }


  }


  addTrack(val){
    if(typeof this.activatedroute.snapshot.params.id === 'undefined') {
      this.musicservice.addTrack(val).subscribe(res => {
        this.route.navigate([''])
      })
    }
    else{
      this.musicservice.editTrack(val,this.activatedroute.snapshot.params.id).subscribe(res => {
        this.route.navigate([''])
      })
    }
  }




}


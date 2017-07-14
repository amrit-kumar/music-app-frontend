import {Injectable} from "@angular/core";
import {RestService} from "./service.rest";
import {URLS} from "../common/url-constant";

@Injectable()
export class GenreService {

  constructor(private restservice:RestService){

  }
  getGenreList(){
    return this.restservice.get(URLS.MUSICTRACK)

  }
  getGenre(){
    return this.restservice.get(URLS.GENRE)
  }
  addTrack(){

  }}

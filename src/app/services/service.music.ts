/**
 * Created by consultadd on 7/12/17.
 */
import {Injectable} from "@angular/core";
import {RestService} from "./service.rest";
import {URLS} from "../common/url-constant";

@Injectable()
export class MusicService {

  constructor(private restservice:RestService){

  }
  getMusicLIst(){
    return this.restservice.get(URLS.MUSICTRACK)

  }
  getGenre(){
    return this.restservice.get(URLS.GENRE)
  }
    addTrack(data){
      let obj;
      obj= {
        title:data.music_title,
        rating:data.music_rating,
        genre:[...data.music_genre],

      }
      obj=JSON.stringify(obj)
      return this.restservice.post(URLS.MUSICTRACK,obj)
    }

  nextPage(page){
    return this.restservice.get(URLS.MUSICPAGE+page)
  }

  searchMusic(search){
    return this.restservice.get(URLS.MUSICSEARCH+search)

  }
  trackGenre(id){
    return this.restservice.get(URLS.MUSICTRACK+id+'/get_genre_by_id')

  }
  addGenre(data){
    return this.restservice.post(URLS.GENRE,data)
  }
  getTrack(id){
    return this.restservice.get(URLS.MUSICTRACK+id)
  }
  editTrack(data,id){
    let obj;
    obj= {
      title:data.music_title,
      rating:data.music_rating,
      genre:[...data.music_genre],

    }
    obj=JSON.stringify(obj)
    return this.restservice.put(URLS.MUSICTRACK+id+'/',obj)
  }
}




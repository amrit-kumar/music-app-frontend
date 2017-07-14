/**
 * Created by consultadd on 17/11/16.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent }  from './music-list/music-list.component'
import { GenreComponent }  from './genre/genre.component'
import {AddNewTrackComponent} from './add-new-track/add-new-track.component'

export const routes: Routes = [

  {
    path: "",
    component:MusicListComponent

  },
  {
    path: "genre",
    component:GenreComponent

  },
  {
    path: "addtrack",
    component:AddNewTrackComponent

  },
  {
    path: "edittrack/:id",
    component:AddNewTrackComponent

  },

];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

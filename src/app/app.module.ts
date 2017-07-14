import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { MusicListComponent } from './music-list/music-list.component';
import {routing, appRoutingProviders} from "./app.routes";
import { AddNewTrackComponent } from './add-new-track/add-new-track.component';
import {MusicService} from "./services/service.music";
import {RestService} from "./services/service.rest";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {GenreService} from "./services/service.genre";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    MusicListComponent,
    AddNewTrackComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MusicService,GenreService,RestService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

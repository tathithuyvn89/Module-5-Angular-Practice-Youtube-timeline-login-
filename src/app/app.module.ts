import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimelinesComponent } from './timelines/timelines.component';
import {RouterModule} from '@angular/router';
import {YoutubePlayerComponent} from './youtubes/youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtubes/youtube-playlist/youtube-playlist.component';
import { DictionaryDetailComponent } from './dictionaries/dictionary-detail/dictionary-detail.component';
import { DictionaryComponent } from './dictionaries/dictionary/dictionary.component';
import { LoginStep1Component } from './login/login-step1/login-step1.component';
import { LoginStep2Component } from './login/login-step2/login-step2.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlayerComponent,
    YoutubePlaylistComponent,
    DictionaryDetailComponent,
    DictionaryComponent,
    LoginStep1Component,
    LoginStep2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

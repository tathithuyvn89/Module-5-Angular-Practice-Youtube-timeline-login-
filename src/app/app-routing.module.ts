import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtubes/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtubes/youtube-player/youtube-player.component';
import {DictionaryComponent} from './dictionaries/dictionary/dictionary.component';
import {DictionaryDetailComponent} from './dictionaries/dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionaries/dictionary-page/dictionary-page.component';
import {LoginStep1Component} from './login/login-step1/login-step1.component';
import {LoginStep2Component} from './login/login-step2/login-step2.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent

  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
        canActivate: []
      }
    ]
  },
  {
    path: 'login-step-1',
    component: LoginStep1Component
  },
  {
    path: 'login-step-2',
    component: LoginStep2Component
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}),
    CommonModule
  ]
})
export class AppRoutingModule { }

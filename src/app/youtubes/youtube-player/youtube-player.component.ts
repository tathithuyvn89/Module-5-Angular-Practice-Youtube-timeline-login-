import { Component, OnInit } from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
song: any;
sub: Subscription;

  constructor(
    private youtubeService: YoutubeService,
    private activeRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) =>
    {const id =  paramMap.get('id');
     this.song = this.youtubeService.findItem(id);
    });
  }
  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

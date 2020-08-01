import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
 word: IWord;

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }
  search (word: string) {
    const meaningOf = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaningOf
    };
  }

}

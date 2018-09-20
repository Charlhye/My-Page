import { Component, OnInit } from '@angular/core';
import * as data  from "../../assets/about-me.json";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  music = (<any>data).aboutme.music;
}

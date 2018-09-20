import { Component, OnInit } from '@angular/core';
import * as data  from "../../assets/about-me.json";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  headtext = (<any>data).aboutme.header;
}

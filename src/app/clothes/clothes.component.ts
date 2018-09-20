import { Component, OnInit } from '@angular/core';
import * as data  from "../../assets/about-me.json";

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clothes = (<any>data).aboutme.clothes;
}

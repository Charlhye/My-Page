import { Component, OnInit } from '@angular/core';
import * as data  from "../../assets/about-me.json";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  food = (<any>data).aboutme.food;

}

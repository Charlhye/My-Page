import { Component, OnInit } from '@angular/core';
import * as data  from "../../assets/about-me.json";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tags = (<any>data).portfolio.tags;
  git = (<any>data).portfolio.footer.git;
  linked = (<any>data).portfolio.footer.linked;
}

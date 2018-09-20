import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FrontComponent } from './front/front.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { ClothesComponent } from './clothes/clothes.component';
import { FoodComponent } from './food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FrontComponent,
    PortfolioComponent,
    MoviesComponent,
    MusicComponent,
    ClothesComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

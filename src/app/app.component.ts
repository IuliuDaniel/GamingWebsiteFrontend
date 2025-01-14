import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsCardComponent } from "./news-card/news-card.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "./carousel/carousel.component";
import { GameDetailComponent } from './game-detail/game-detail.component';
import { NewsCardApiComponent } from "./news-card/news-card-api-component";
import { HomePageComponent } from "./news-home/news-home.component";
import { GameDetailApiComponent } from "./game-detail/game-detail-api.component";
import { Routes, RouterModule } from '@angular/router'; 
import {appRoutes} from './app.routes';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsCardComponent, CommonModule, CarouselComponent, GameDetailComponent, NewsCardApiComponent, HomePageComponent, GameDetailApiComponent, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gaming-news';
}
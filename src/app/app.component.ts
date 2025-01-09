import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsCardComponent } from "./news-card/news-card.component";
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "./carousel/carousel.component";
import { GameDetailComponent } from './game-detail/game-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewsCardComponent, CommonModule, CarouselComponent, GameDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gaming-news';
  
  // Test array for inputs
  repeatTimes = Array.from({ length: 10 });
}
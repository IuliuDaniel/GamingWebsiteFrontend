import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { ApiService } from "../services/api-service";
import { forkJoin } from "rxjs";
import { ImagePreloaderService } from '../services/images-preloader.service';

@Component({
  selector: 'app-news-carousel-api',
  imports: [CarouselComponent],
  template: `
    <app-carousel
      [images]="carouselImages"
      [titles]="carouselTitles"
      [descriptions]="carouselDescriptions"
      [gameId]="carouselGameIds"
    ></app-carousel>
  `,
  styles: [],
  standalone: true,
})
export class NewsPageCarouselComponent implements OnInit {
  carouselImages: string[] = [];
  carouselTitles: string[] = [];
  carouselDescriptions: string[] = [];
  carouselGameIds: number[] = [];

  constructor(private apiService: ApiService, private imagePreloaderService: ImagePreloaderService) {}

  ngOnInit(): void {
    // Generate 3 random game IDs
    const gameIds = this.getRandomGameIds(4, 55);
  
    // Create requests for game details and images for each game ID
    const requests = gameIds.map((id) =>
      forkJoin({
        game: this.apiService.getData(`games/${id}`),
        images: this.apiService.getData(`games/${id}/images`),
      })
    );
  
    // Use forkJoin to wait for all game requests to complete
    forkJoin(requests).subscribe((responses: any[]) => {
      // Map the responses to populate the carousel properties
      this.carouselImages = responses.map(
        (response) =>
          response.images[response.images.length - 1].imageUrl // Last image for each game
      );
      this.carouselTitles = responses.map((response) => response.game.name); // Game name
      this.carouselDescriptions = responses.map(
        (response) => response.game.description // Game description
      );
      this.carouselGameIds = responses.map((response) => response.game.gameId); // Game ID
    });
    
    this.imagePreloaderService.preloadImages(this.carouselImages);
  }
  
  // Utility function to generate unique random IDs
  private getRandomGameIds(count: number, max: number): number[] {
    const ids = new Set<number>();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(ids);
  }
}

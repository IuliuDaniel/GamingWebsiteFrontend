// Carousel developed using ngx-slick-carousel
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule, SlickCarouselModule, RouterModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None // Disable the default settings for the carousel, dots can be modified now
})
export class CarouselComponent {
  @Input() images: string[] = []; // Array of images to be displayed in the carousel
  @Input() titles: string[] = []; // Array of titles to be displayed in the carousel
  @Input() descriptions: string[] = []; // Array of descriptions to be displayed in the carousel
  @Input() gameId: number[] = []; // Array of gameIds to be displayed in the carousel

  // Configuration for carousel
  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true, // Enable dots navigation
    arrows: false, // Enable navigation arrows
    responsive: [
        {
            breakpoint: 768, // Mobile screens
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024, // Tablet screens
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule, SlickCarouselModule],
  standalone: true
})
export class CarouselComponent {
  images = [
    'https://i.redd.it/1bc2g09m0yj51.jpg',
    'https://wallpaperaccess.com/full/4582655.jpg'
  ];
  titles = ['ONE title test', 'TWO title test'];
  descriptions = ['ONE description', 'TWO description'];

  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true, // Enable dots navigation
    arrows: true, // Enable navigation arrows
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
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};
}

// Carousel developed using ngx-slick-carousel
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule, SlickCarouselModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
  images = [
    'https://i.redd.it/1bc2g09m0yj51.jpg',
    'https://wallpapers.com/images/featured/avatar-pictures-vohr0oeq1ld3lpbp.jpg',
    "https://images7.alphacoders.com/757/757223.jpg"
  ];
  titles = ['ONE title test', 'TWO title test', "THREE title test"];
  descriptions = ['ONE description', 'TWO description', "THREE INUYASHA"];

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

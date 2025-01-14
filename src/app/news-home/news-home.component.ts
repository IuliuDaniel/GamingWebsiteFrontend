import { Component } from "@angular/core";
import { NewsCardApiComponent } from "../news-card/news-card-api-component";
import { CarouselComponent } from "../carousel/carousel.component";
import { NewsPageCarouselComponent } from "../carousel/carousel-api.component";
import { NewsPageCardComponent } from "../news-card/news-card-api-component-loop";

@Component
({
    selector: "app-news-home",
    templateUrl: "./news-home.component.html",
    styleUrls: ["./news-home.component.css"],
    imports: [NewsCardApiComponent, CarouselComponent, NewsPageCarouselComponent, NewsPageCardComponent],
    standalone: true
})

export class HomePageComponent
{

}
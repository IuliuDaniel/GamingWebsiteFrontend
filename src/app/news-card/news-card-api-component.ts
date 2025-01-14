// This component is responsable for fetching the news articles from the API and displaying them in the news card component

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api-service";
import { CommonModule } from "@angular/common";
import { NewsCardComponent } from "./news-card.component";
import { forkJoin } from "rxjs";
import { ImagePreloaderService } from "../services/images-preloader.service";
import { Input } from "@angular/core";

@Component
({
    selector: "app-news-card-api",
    template:" <div><app-news-card *ngFor='let article of articles' [article]='article'></app-news-card></div>", // This is the template for the component, called once for each article in the articles array
                                                                                                                 // Which means the news-card component is rendered once for each item in article
    imports: [CommonModule, NewsCardComponent],
    standalone: true
})

export class NewsCardApiComponent implements OnInit
{
    @Input() gameId!: number;
    articles: any[] = [];

    constructor(private apiService: ApiService, private imagePreloadService: ImagePreloaderService){}

    // This function is called when the component is initialized
    ngOnInit(): void {

        // Requests for news articles made here
        // forkJoin for ease of use and overall less code written
        // Too many request are made tho, should I redo the database?
        forkJoin
        ({
            articles: this.apiService.getData(`games/${this.gameId}/news`),
            game: this.apiService.getData(`games/${this.gameId}`),
            images: this.apiService.getData(`games/${this.gameId}/images`) 
        }).subscribe((response: any) => 
        {
            const{ articles, game, images } = response; // Destructuring the response object
            console.log(response);
            this.articles = articles.map((item: any) =>
            ({
                title: item.title,
                summary: item.summary,
                publishedDate: item.publishedDate.split("T")[0],  // Split the date and time, only the date is needed
                articleLink: item.articleLink,
                gameName: game.name,
                gameId: game.id,
                // The returned images are an array, so I'm just picking a random one
                imageUrl: images[Math.floor(Math.random() * images.length)].imageUrl
            }));
        });
    }
}

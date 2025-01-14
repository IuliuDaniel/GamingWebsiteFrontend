// Very similar with the news-card-api-component.ts
// The difference is that this component is responsible for fetching multiple news articles from random generated gameIds 
// Less comments because the code is very similar

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api-service";
import { forkJoin } from "rxjs";
import { NewsCardComponent } from "./news-card.component";
import { CommonModule } from "@angular/common"; 

@Component({
  selector: "app-news-card-api-loop",
  imports: [NewsCardComponent, CommonModule],
  template: " <div><app-news-card *ngFor='let article of articles' [article]='article'></app-news-card></div>", // This is the template for the component, called once for each article in the articles array
  standalone: true
})

export class NewsPageCardComponent implements OnInit {
  articles: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const gameIds = this.getRandomGameIds(10, 55);

    const requests = gameIds.map((id) =>
      forkJoin({
        articles: this.apiService.getData(`games/${id}/news`),
        game: this.apiService.getData(`games/${id}`),
        images: this.apiService.getData(`games/${id}/images`),
      })
    );

    // Map the responses to articles
    forkJoin(requests).subscribe((responses) => {
      this.articles = responses.flatMap((response: any) => {
        const { articles, game, images } = response;
        return articles.slice(0, 1).map((item: any) => ({                       // We use slice to get only the first article
          title: item.title,
          summary: item.summary,
          publishedDate: item.publishedDate.split("T")[0],
          articleLink: item.articleLink,
          gameName: game.name,
          gameId: game.gameId,
          imageUrl: images[Math.floor(Math.random() * images.length)].imageUrl, // Get a random image 
        }));
      });
    });
  }

  // Function to get random game ids between 1 and a hardcoded value
  // Should get the number of games from the database for scalability
  private getRandomGameIds(count: number, max: number): number[] {
    const ids = new Set<number>();
    while (ids.size < count) {
      ids.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(ids);
  }
}

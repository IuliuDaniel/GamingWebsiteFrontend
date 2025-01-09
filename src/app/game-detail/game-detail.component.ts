import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Game } from "../../game.model";
import { NewsCardComponent } from "../news-card/news-card.component";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import test from "node:test";

@Component
({
    selector: "app-game-detail",
    templateUrl: "./game-detail.component.html",
    styleUrls: ["./game-detail.component.css"],
    imports: [CommonModule, NewsCardComponent],
    standalone: true
})

export class GameDetailComponent
{
    game: Game =
    {
        gameId: 38,
        name: 'Ghost of Tsushima',
        releaseDate: '2020-07-17',
        developer: 'Sucker Punch Productions',
        publisher: 'Sony Interactive Entertainment',
        genreId: 2,
        trailerUrl: 'https://www.youtube.com/watch?v=iqysmS4lxwQ',
        minimumRequirements: 'OS: PlayStation 4, Processor: 8-core CPU, Memory: 8 GB RAM, Graphics: AMD GCN, Storage: 50 GB available space',
        recommendedRequirements: 'OS: PlayStation 4, Processor: N/A, Memory: 8 GB RAM, Graphics: N/A, Storage: 50 GB available space',
        description: 'Ghost of Tsushima is an open-world action-adventure game set in feudal Japan during the Mongol invasion. Players control Jin Sakai, a samurai who must adapt to unconventional tactics in order to defend his homeland. The game features a blend of sword combat, stealth, and exploration, with a focus on fluid combat and beautiful landscapes. The game’s art direction, music, and narrative are heavily inspired by Japanese culture and cinema. Ghost of Tsushima is known for its stunning visuals, engaging combat mechanics, and its tribute to samurai films and historical fiction.',
        wallpaperLink: 'https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg',
        screenshots: [
          'https://media.rawg.io/media/screenshots/2e7/2e7a9e16cae5ba5daca74029981029c3.jpg',
          'https://media.rawg.io/media/screenshots/ba0/ba09edd0dc18e56a3b62aba32b9c3ed6.jpg',
          'https://media.rawg.io/media/screenshots/7a6/7a6d792781b4ee1414cdb0649a2e56ac.jpg',
          "https://media.rawg.io/media/screenshots/aa5/aa543c81d5f342a7d3aecc55df89f66e.jpg",
          "https://media.rawg.io/media/screenshots/547/5476a303d0ec920c29264ff18da5741a.jpg"
        ],
        platforms: ['PC', 'PlayStation 5'],
        news: [
          { title: 'Ghost of Tsushima Review – A Stunning Samurai Epic', summary: 'Ghost of Tsushima offers a breathtaking open-world experience, mixing samurai combat with a compelling story. This review covers the games impressive visuals, fluid combat mechanics, and historical setting.', publishedDate:"2020-07-17 00:00:00.0000000", gameId: 38, imageUrl:"https://media.rawg.io/media/screenshots/7a6/7a6d792781b4ee1414cdb0649a2e56ac.jpg" , articleLink:"https://www.polygon.com/reviews/2020/7/17/21327478/ghost-of-tsushima-review-ps4-sucker-punch", gameName:"Ghost of Tsushima" },
          { title: 'Ghost of Tsushima: Director’s Cut Announced with New Content', summary: 'This article discusses the Ghost of Tsushima: Director’s Cut, which includes additional content like the Iki Island expansion. It covers the improvements and new features added to the game.', publishedDate:"2021-07-20 00:00:00.0000000", gameId: 38, imageUrl:"https://media.rawg.io/media/screenshots/547/5476a303d0ec920c29264ff18da5741a.jpg", articleLink:"https://www.pcgamer.com/ghost-of-tsushima-directors-cut-announced-with-new-content/", gameName:"Ghost of Tsushima" }
        ],
        stores: 
        [
          { storeId: 1, name: "Steam", websiteUrl: "Steam.com", price: 59.99 },
          { storeId: 2, name: "Epic Games", websiteUrl: "youtube.com", price: 49.99 },
          { storeId: 3, name: "GOG", websiteUrl: "GOG.com", price: 69.99 }
        ] 
    }

    // Method to parse both the minimum and recommended requirements
    // Ended up replacing the complicated parser with a simple method
    // API always returns the same format for requirements
    ParseRequirements(requirements: string, index: number)
    {
      const parsedRequirements = requirements.split(",")[index];
      return parsedRequirements;
      
    }

    // Method to modify the URL from standard to embed
    linkModifier(url: string)
    {
      if(url.includes("youtube.com"))
      {
        const videoId = url.split("v=")[1];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url
    }
    
    // Idfk why I need this
    constructor(private sanitizer: DomSanitizer) {}

    // Method to sanitize the URL for embbeding
    sanitizeUrl(url: string): SafeResourceUrl
    {
        var embedUrl = this.linkModifier(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
}
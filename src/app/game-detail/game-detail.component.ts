import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Game } from "../../game.model";
import { NewsCardComponent } from "../news-card/news-card.component";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ImagePreloaderService } from "../services/images-preloader.service";
import { ApiService } from "../services/api-service";
import { NewsCardApiComponent } from "../news-card/news-card-api-component";
import { Input } from "@angular/core";

@Component
({
    selector: "app-game-detail",
    templateUrl: "./game-detail.component.html",
    styleUrls: ["./game-detail.component.css"],
    imports: [CommonModule, NewsCardApiComponent],
    standalone: true
})

export class GameDetailComponent
{
    //@Input() game!: Game; // Input for the game to be displayed, always receives input from parent component, hence no default values
                            // The exclamation mark is used to tell TypeScript that the variable will be initialized later
                            // Scraped, better to give it a default value
    @Input() game: Game = {
      gameId: 1,
      name: "API Error",
      releaseDate: "",
      developer: "",
      publisher: "",
      genreName: "",
      trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      minimumRequirements: "",
      recommendedRequirements: "",
      description: "The api probably doesn't work, fix it Daniel!, untill then, enjoy this rickroll",
      wallpaperLink: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2012/May/120523/383994-rickroll.jpg",
      screenshots: [],
      platforms: [],
      stores: []
    };

        

    constructor(private sanitizer: DomSanitizer, private imagePreloadService: ImagePreloaderService){}

    ngOnInit(): void {
      this.imagePreloadService.preloadImages(this.game.screenshots);
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
    
    
    // Method to sanitize the URL for embbeding
    sanitizeUrl(url: string): SafeResourceUrl
    {
        var embedUrl = this.linkModifier(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
}
// This component is responsable for fetching the game details from the API and displaying them in the game detail component

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameDetailComponent } from "./game-detail.component";
import { forkJoin, Subscription } from "rxjs";
import { Game } from "../../game.model";
import { ApiService } from "../services/api-service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-game-detail-api",
    template: "<app-game-detail [game]='fullGameDetails'></app-game-detail>", // We pass fullGameDetails to the [game] input of the GameDetailComponent
    imports: [CommonModule, GameDetailComponent],
    standalone: true
})
export class GameDetailApiComponent implements OnInit {

    fullGameDetails!: Game;
    private routeSub!: Subscription; // Subscription to the route

    constructor(private apiService: ApiService, private route: ActivatedRoute) {} // Constructor with the ApiService and ActivatedRoute injected

ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
        const gameId = params.get("id"); // Get the game ID from the route parameter
    

    forkJoin({
        gameDetails: this.apiService.getData(`games/${gameId}`),
        gameMedia: this.apiService.getData(`games/${gameId}/images`),
        gamePlatforms: this.apiService.getData(`games/${gameId}/platforms`),
        gameStores: this.apiService.getData(`games/${gameId}/stores`),
    }).subscribe((response: any) => {
        const { gameDetails, gameMedia, gamePlatforms, gameStores } = response;

        console.log(response);

        this.fullGameDetails = {
            gameId: gameDetails.gameId,
            name: gameDetails.name,
            releaseDate: gameDetails.releaseDate.split("T")[0],  // Split the date and time, only the date is needed
            developer: gameDetails.developer,
            publisher: gameDetails.publisher,
            genreName: gameDetails.genre.name,
            trailerUrl: gameDetails.trailerUrl,
            minimumRequirements: gameDetails.minimumRequirements,
            recommendedRequirements: gameDetails.recommendedRequirements,
            description: gameDetails.description,
            wallpaperLink:gameMedia[gameMedia.length - 1].imageUrl, // The last image in the array is the wallpaper ('cause I made the API that way)
            screenshots: gameMedia.map((image: any) => image.imageUrl),  // Map the images to an array of strings
            platforms: gamePlatforms.map((platform: any) => platform.platform.name), // Map the platforms to an array of strings
            stores: gameStores.map((store: any) => ({
                storeId: store.store.storeId,
                name: store.store.name,
                websiteUrl: store.store.websiteUrl,
                price: store.price
            }))
        };
    });
});
}
ngOnDestroy(): void {
    if (this.routeSub) {
        this.routeSub.unsubscribe();
    }
}
}

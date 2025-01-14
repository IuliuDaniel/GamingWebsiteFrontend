import { Component, input, Input } from "@angular/core"; // Imported to allow the creation of the components, to allow input
import { RouterModule } from "@angular/router";

// Define the source files and definitions for the card
@Component
({
    selector: "app-news-card",                  // Define the selector which this will be called with
    templateUrl: "./news-card.component.html",  // Define the path to its template (the file in which is defined)
    styleUrls: ["./news-card.component.css"],   // Define the path to its style files. string[] in case there's more style files
    imports: [RouterModule],                    // Define the imports of the component
    standalone: true                            // States that it's a standalone component, not part of any NgModule
})

// Define the properties (content) of the card
export class NewsCardComponent
{
    // Define the structure of the article (That's why I can't directly insert hardcoded values here)
    @Input() article: 
    {
        title: string;
        summary: string;
        publishedDate: string;
        gameId: number;          // Id from Game table
        imageUrl: string;        // Link from Images table
        articleLink: string;
        gameName: string;        // Name from Game table
    } 
    =
    // Hardcode some values to circumvent a temporary error
    {
        title: "",
        summary: "",
        publishedDate: "",
        gameId: 12,
        imageUrl: "",
        articleLink: "",
        gameName: ""
    }
}


/*  TO RESEARCH
    1) What the fuck does "Standalone, not a part of any NgModule means" 
*/
import { Component, input, Input } from "@angular/core"; // Imported to allow the creation of the components, to allow input

// Define the source files and definitions for the card
@Component
({
    selector: "app-news-card",                  // Define the selector which this will be called with
    templateUrl: "./news-card.component.html",  // Define the path to its template (the file in which is defined)
    styleUrls: ["./news-card.component.css"],   // Define the path to its style files. string[] in case there's more style files
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
        title: "Elden Ring: The Convergence Will Keep You Busy Until Nightreign",
        summary: "Hardcoded test  summaryHardcoded test summaryHardcoded test summaryHardcoded test summaryHardcoded test summaryHardcoded test summaryHardcoded test summaryHardcoded test summaryHardcoded test summaryHardcoded test summaryHardcoded test summaryHardcoded test summary",
        publishedDate: "Hardcoded 23/12/1999",
        gameId: 3,
        imageUrl: "https://i.pinimg.com/originals/09/d4/2f/09d42fa7d65d264e90ae49f769d84c25.jpg",
        articleLink: "https://www.youtube.com",
        gameName: "Test name"
    }

    readMore()
    {
        // Method to define a read more functionality
        // It will need a parameter
    }
}


/*  TO RESEARCH
    1) What the fuck does "Standalone, not a part of any NgModule means"
*/
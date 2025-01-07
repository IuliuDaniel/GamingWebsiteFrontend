import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component
({
    selector: "app-carousel",                   // Define the selector which this will be called with    
    templateUrl: "./carousel.component.html",   // Define the path to its template (the file in which is defined)
    styleUrls: ["./carousel.component.css"],    // Define the path to its style files. string[] in case there's more style files
    standalone: true                            // States that it's a standalone component, not part of any NgModule
})

export class CarouselComponent
{
    @Input() items: any[] = [];
    currentIndex = 0;

    // Options for previous and next buttons
    previous()
    {
         this.currentIndex = (this.currentIndex > 0) ? this.currentIndex = - 1: this.items.length -1 ;
    }

    next()
    {
        this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
    }
}
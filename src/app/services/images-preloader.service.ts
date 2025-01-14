// image-preloader.service.ts
// This service is used to preload images before they are displayed in the application. This is useful for ensuring that images are loaded before they are displayed, which can help improve the user experience.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagePreloaderService {
  preloadImages(imageUrls: string[]): Promise<void> {
    const imagePromises = imageUrls.map((url) => this.loadImage(url));
    return Promise.all(imagePromises).then(() => {});
  }

  private loadImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = (error) => reject(`Error loading image: ${url}`);
    });
  }
}

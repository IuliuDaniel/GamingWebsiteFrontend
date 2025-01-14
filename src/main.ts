import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Define the routes for the application
// Routes based on the game id

bootstrapApplication(AppComponent, appConfig, )
  .catch((err) => console.error(err));
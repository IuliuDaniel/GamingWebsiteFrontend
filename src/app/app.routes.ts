import { Routes } from '@angular/router';
import { GameDetailApiComponent } from './game-detail/game-detail-api.component';
import { HomePageComponent } from './news-home/news-home.component';

export const appRoutes: Routes = [
    {path: 'games/:id', component: GameDetailApiComponent},
    {path: '', component: HomePageComponent}
];


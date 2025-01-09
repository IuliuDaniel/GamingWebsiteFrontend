// Interfaces for the Game details
export interface Game
{
    gameId: number;
    name: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    genreId: number;
    trailerUrl: string;
    minimumRequirements: string;
    recommendedRequirements: string;
    description: string;
    wallpaperLink: string;
    screenshots: string[];
    platforms: string[];
    news: Array<
    {
        title: string;
        summary: string;
        publishedDate: string;
        gameId: number;
        imageUrl: string;
        articleLink: string;
        gameName: string;
    }>;
    stores: Array<
    {
        storeId: number;
        name: string;
        websiteUrl: string;
        price: number;
    } >
}

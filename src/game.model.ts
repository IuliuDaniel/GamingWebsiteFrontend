// Interfaces for the Game details
// I'm pretty sure they should be in a separate folder, lol
export interface Game
{
    gameId: number;
    name: string;
    releaseDate: string;
    developer: string;
    publisher: string;
    genreName: string;
    trailerUrl: string;
    minimumRequirements: string;
    recommendedRequirements: string;
    description: string;
    wallpaperLink: string;
    screenshots: string[];
    platforms: string[];
    stores: Array<
    {
        storeId: number;
        name: string;
        websiteUrl: string;
        price: number;
    } >
}

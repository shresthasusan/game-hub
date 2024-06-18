import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface genre {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    getCroppedImageUrl(background_image: any): string | undefined;
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genre: genre[]
}




const useGames = () => useData<Game>('/games')
export default useGames;
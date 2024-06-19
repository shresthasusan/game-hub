import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
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
}

const useGames = (
    selectedGenre: Genre | null,
    selectedPlaform: Platform | null
) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: selectedGenre?.id,
                platforms: selectedPlaform?.id,
            },
        },
        [selectedGenre?.id, selectedPlaform?.id]
    );
export default useGames;

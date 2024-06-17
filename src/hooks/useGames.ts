import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

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


interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClients
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                console.log("fetched data")
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => {
            controller.abort();
            console.log("aborted")
        };
    }, []);
    return { games, error };
}

export default useGames;
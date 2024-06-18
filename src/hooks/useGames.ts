import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

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


interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClients
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results);
                console.log("fetched data")
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false);
            });

        return () => {
            controller.abort();
            console.log("aborted")
        };
    }, []);
    return { games, error, loading };
}

export default useGames;
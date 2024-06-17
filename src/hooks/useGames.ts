import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";

interface Game {
    id: number;
    name: string;
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
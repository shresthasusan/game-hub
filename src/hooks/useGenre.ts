import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";



export interface Genre {
    id: number;
    name: string;
    slug: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClients
            .get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
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
    return { genres, error, loading };
}

export default useGenre;

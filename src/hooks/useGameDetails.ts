import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";



export interface FetchDetailsResponse {
    id: number;
    rating: number;
    released: string;
    genres: { name: string }[];
    esrb_rating: { slug: string };
    description_raw: string;
}

const useGameDetails = (
    endpoint: number,
    requestConfig?: AxiosRequestConfig,
    deps?: any[]
) => {
    const [data, setData] = useState<FetchDetailsResponse>({
        id: 0, // Assuming 0 is an acceptable default value
        rating: 0, // Assuming 0 is an acceptable default value
        released: "", // Empty string as default
        genres: [], // Empty array as default
        esrb_rating: { slug: "" }, // Empty string as default for slug
        description_raw: "", // Empty string as default
    }); // Changed to match FetchDetailsResponse structure
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            const controller = new AbortController();

            setLoading(true);
            apiClients
                .get<FetchDetailsResponse>(`/games/${endpoint}`, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then((res) => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                });

            return () => {
                controller.abort();
            };
        },
        deps ? [...deps] : []
    );
    return { data, error, loading };
};

export default useGameDetails;
import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClients from "../services/api-clients";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: any[]
) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(
        () => {
            const controller = new AbortController();

            setLoading(true);
            apiClients
                .get<FetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then((res) => {
                    setData(res.data.results);
                    setLoading(false);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                });

            return () => {
                controller.abort();
                console.log("aborted");
            };
        },
        deps ? [...deps] : []
    );
    return { data, error, loading, skeletons };
};

export default useData;

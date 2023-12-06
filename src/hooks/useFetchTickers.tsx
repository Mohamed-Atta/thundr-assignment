import { useState, useEffect } from "react";

export interface FetchTickersProps {
  limit: number;
  searchValue: string;
}

export const useFetchTickers = ({ limit, searchValue }: FetchTickersProps) => {
  const baseUrl: string = "https://api.polygon.io/v3/reference/tickers";
  const apiKey: string = "oQfYx_g9dVW8iWHZGaopZKlBgaorNAKN";
  const url: string = `${baseUrl}?ticker=${searchValue}&active=true&limit=${limit}&apiKey=${apiKey}`;

  const [tickers, setTickers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTickers = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setLoading(false);
        setTickers(json.results);
        setError("");
      } catch (error) {
        setError(`Could not Fetch Tickers`);
        setLoading(false);
      }
    };
    fetchTickers();
  }, [url, limit, searchValue]);
  return { tickers, loading, error };
};

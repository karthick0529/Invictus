import { useEffect, useState } from "react";
import { fetchMarketData } from "../services/api";

/**
 * useFetchCrypto - Custom React Hook
 *
 * Fetches cryptocurrency market data from an external API using the fetchMarketData service.
 * Automatically refreshes data every 30 seconds and handles loading and error states.
 *
 * State Returned:
 * - data (Array): The list of cryptocurrency data returned from the API.
 * - loading (boolean): Indicates whether data is currently being loaded.
 * - error (string|null): Error message if fetching fails.
 * - refetch (function): Manual function to re-trigger data fetching.
 *
 * Usage:
 * const { data, loading, error, refetch } = useFetchCrypto();
 *
 * Dependencies:
 * - fetchMarketData from ../services/api
 */

const useFetchCrypto = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetchMarketData();
      setData(result);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchCrypto;

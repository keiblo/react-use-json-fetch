import {useState, useEffect} from "react";

export const useJsonFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let cancelled = false;
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setData(json);
        setLoading(false);
        return () => (cancelled = true);
      } catch (error) {
        setError(error);
        return () => (cancelled = true);
      }
    };

    fetchData(url, options);
  }, [url]);

  return [data, loading, error];
};

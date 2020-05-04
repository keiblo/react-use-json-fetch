import {useState, useEffect} from "react";

export const useJsonFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const jsonResponse = await response.json();
        setData(jsonResponse);
        setLoading(false);
      } else {
        // Handle errors
        setError(response.status);
        setLoading(false);
      }
    };
    fetchData(url, options);
  }, [url]);

  return [{data, loading, error}];
};

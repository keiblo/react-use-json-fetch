import {useState, useEffect} from "react";

const useJsonFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(url, options);
      const json = await res.json();

      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url, options);
  }, [url]);

  return [{data, loading, error}];
};

export default useJsonFetch;

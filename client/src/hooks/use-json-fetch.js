import React, {useState, useEffect} from "react";

const useJsonFetch = (url, options) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchData(url, options);
  }, [url]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      console.log(res);
      setData(json);

      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return {data, loading, error};
};

export default useJsonFetch;

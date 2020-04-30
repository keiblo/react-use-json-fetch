import React from "react";
import useJsonFetch from "../hooks/use-json-fetch";

const ComponentOne = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data", {});

  if (error) {
    return <p>{error}</p>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    return <p>{data}</p>;
  }
};

export default ComponentOne;

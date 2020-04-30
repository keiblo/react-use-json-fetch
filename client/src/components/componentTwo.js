import React from "react";
import useJsonFetch from "../hooks/use-json-fetch";

const ComponentTwo = () => {
  const [data, loading, error] = useJsonFetch(
    "http://localhost:7070/error",
    {}
  );

  if (error) {
    return <p>{error}</p>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    return <p>{data.status}</p>;
  }
};

export default ComponentTwo;

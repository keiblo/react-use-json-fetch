import React from "react";
import {useJsonFetch} from "../hooks/use-json-fetch";

const ComponentThree = () => {
  const [data, loading, error] = useJsonFetch(
    "http://localhost:7070/loading",
    {}
  );

  if (error) {
    return <p>{error}</p>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    return <p>{data}</p>;
  }
};

export default ComponentThree;

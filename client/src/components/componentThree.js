import React from "react";
import {useJsonFetch} from "../hooks/use-json-fetch";

const ComponentThree = () => {
  const [{data, loading, error}] = useJsonFetch(
    "http://localhost:7070/loading",
    {}
  );

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return <p>Not loading..</p>;
  }
};

export default ComponentThree;

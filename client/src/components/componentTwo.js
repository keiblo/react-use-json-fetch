import React from "react";
import {useJsonFetch} from "../hooks/use-json-fetch";

const ComponentTwo = () => {
  const [data] = useJsonFetch("http://localhost:7070/error", {});

  if (data.error) {
    return <p>{data.error}</p>;
  } else if (data.loading) {
    return <p>Loading...</p>;
  } else {
    return <p>{data.status}</p>;
  }
};

export default ComponentTwo;

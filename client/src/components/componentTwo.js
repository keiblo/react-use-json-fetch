import React from "react";
import {useJsonFetch} from "../hooks/use-json-fetch";

const ComponentTwo = () => {
  const [data] = useJsonFetch("http://localhost:7070/error", {});

  return <div>{data.error ? <p>Error status:{data.error} </p> : null}</div>;
};

export default ComponentTwo;

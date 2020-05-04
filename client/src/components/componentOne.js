import React from "react";
import {useJsonFetch} from "../hooks/use-json-fetch";

const ComponentOne = () => {
  const [data] = useJsonFetch("http://localhost:7070/data", {});

  if (data.data) {
    return <p>Respponse status: {data.data.status}</p>;
  } else {
    return <p>Not working</p>;
  }
};

export default ComponentOne;

import React from "react";
import useJsonFetch from "../hooks/use-json-fetch";
const ComponentOne = () => {
  const res = useJsonFetch("http://localhost:7070/data", {});
  console.log("Component1");
  console.log(res);
  if (res.error) {
    return <p>{res.error}</p>;
  } else if (res.loading) {
    return <p>Loading...</p>;
  } else {
    return <p>{res.data.data.status}</p>;
  }
};

export default ComponentOne;

"use client";
import { useState, useEffect } from "react";
const useGetData = ({ url }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [isWaiting, setIsWaiting] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsWaiting(false);
        })
        .catch((Error) => {
          setError(Error.message);
        });
    }, 6000);
  }, [url]);
  return { data, error, isWaiting };
};
export default useGetData;

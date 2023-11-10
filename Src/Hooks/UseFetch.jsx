import axios from "axios";
import React, { useEffect, useState } from "react";

export const UseFetch = (apiUrl) => {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const {data:resData} = await axios.get(apiUrl);
      setData(resData);
      setLoading(false);
    } catch (error) {
        setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { error, loading, data };
};
